import FrankUtils = require("./FrankUtils");
import { FrankClass, FrankClassClass } from "./FrankClass";
var newInstance = function (this: { new(): any }) {
    new this();
};
var checkInstanceof = function (clazz: any, superClass: any): boolean {
    if (!clazz) {
        return false;
    } else if (clazz === superClass) {
        return true;
    } else if (clazz.hasOwnProperty("isAssignableFrom")) {
        return clazz.isAssignableFrom(superClass);
    } else {
        return clazz.prototype instanceof superClass;
    }
};
export class FrankType<D, S> {
    public toClass: () => { new(): D & S & FrankClass<D, S> } & FrankClassClass<D, S>;
    constructor(className: string, classBody: { new(): D }, superClass: { new(): S }) {
        className = className + "";
        //1.用于储存类
        var fc: { [key: string]: any } = {};
        //2.不对外暴露的私有作用域
        var fk: { [key: string]: any } = {};
        fk.GenericClass = superClass;
        fk.GenericClassBody = classBody;
        fk.isInstance = function (clazz: { new(): any }) {
            if (fc[className] === clazz) {
                return true;
            } else {
                return fk.isAssignableFrom.apply(fc[className], [clazz]);
            }
        };
        fk.isAssignableFrom = function (clazz: { new(): any }) {
            if (typeof clazz != "function") {
                return false;
            } else if (clazz === Object) {
                return true;
            } else {
                return checkInstanceof(fk.GenericClassBody, clazz) || checkInstanceof(fk.GenericClass, clazz);
            }
        };

        //3.重新实现了原型链机制的类构造体
        fc[className] = function () {
            if (fk.GenericClass != null) {
                fc[className].prototype = new fk.GenericClass();
            }
            if (fk.GenericClassBody != null) {
                fk.GenericClassBody.apply(this, arguments);
            }
            this.isInstance = fk.isInstance;
            this.superApply = function (name: string, args?: Array<any>): any {
                return FrankUtils.findSuperMethod(this, name).apply(this, args || []);
            };
        };
        fc[className].newInstance = newInstance;
        fc[className].isAssignableFrom = fk.isAssignableFrom
        fc[className].statics = function (clazz: { new(): any }) {
            clazz.call(fc[className]);
            return fc[className];
        };
        this.toClass = function () {
            var temp = fk.GenericClassBody; //e
            //初始化prototype
            fk.GenericClassBody = null;
            new fc[className]();
            fk.GenericClassBody = temp;
            return fc[className];
        };
    }
};

export class BodyType<D> {
    constructor(public className: string, public classBody: { new(): D }) { }
    public extendsFrom<S>(superClass: { new(): S }): FrankType<D, S> {
        return new FrankType<D, S>(this.className, this.classBody, superClass);
    }
    public toClass(): { new(): D & Object & FrankClass<D, Object> } & FrankClassClass<D, Object> {
        return this.extendsFrom(Object).toClass();
    }
}
export class ExtendType<S>{
    constructor(public className: string, public extendClass: { new(): S }) { }
    public classBody<D>(classBody: { new(): D }): FrankType<D, S> {
        return new FrankType<D, S>(this.className, classBody, this.extendClass);
    }
    public toClass(): { new(): Object & S & FrankClass<Object, S> } & FrankClassClass<Object, S> {
        return this.classBody(Object).toClass();
    }
}
export class EmptyType {
    constructor(public className: string) { }
    public classBody<D>(classBody: { new(): D }): BodyType<D> {
        return new BodyType<D>(this.className, classBody);
    }
    public extendsFrom<S>(extendClass: { new(): S }): ExtendType<S> {
        return new ExtendType<S>(this.className, extendClass);
    }
}