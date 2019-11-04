"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrankUtils = require("./FrankUtils");
var newInstance = function () {
    new this();
};
var checkInstanceof = function (clazz, superClass) {
    if (!clazz) {
        return false;
    }
    else if (clazz === superClass) {
        return true;
    }
    else if (clazz.hasOwnProperty("isAssignableFrom")) {
        return clazz.isAssignableFrom(superClass);
    }
    else {
        return clazz.prototype instanceof superClass;
    }
};
var FrankType = /** @class */ (function () {
    function FrankType(className, classBody, superClass) {
        className = className + "";
        //1.用于储存类
        var fc = {};
        //2.不对外暴露的私有作用域
        var fk = {};
        fk.GenericClass = superClass;
        fk.GenericClassBody = classBody;
        fk.isInstance = function (clazz) {
            if (fc[className] === clazz) {
                return true;
            }
            else {
                return fk.isAssignableFrom.apply(fc[className], [clazz]);
            }
        };
        fk.isAssignableFrom = function (clazz) {
            if (typeof clazz != "function") {
                return false;
            }
            else if (clazz === Object) {
                return true;
            }
            else {
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
            this.superApply = function (name, args) {
                return FrankUtils.findSuperMethod(this, name).apply(this, args || []);
            };
        };
        fc[className].newInstance = newInstance;
        fc[className].isAssignableFrom = fk.isAssignableFrom;
        fc[className].statics = function (clazz) {
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
    return FrankType;
}());
exports.FrankType = FrankType;
;
var BodyType = /** @class */ (function () {
    function BodyType(className, classBody) {
        this.className = className;
        this.classBody = classBody;
    }
    BodyType.prototype.extendsFrom = function (superClass) {
        return new FrankType(this.className, this.classBody, superClass);
    };
    BodyType.prototype.toClass = function () {
        return this.extendsFrom(Object).toClass();
    };
    return BodyType;
}());
exports.BodyType = BodyType;
var ExtendType = /** @class */ (function () {
    function ExtendType(className, extendClass) {
        this.className = className;
        this.extendClass = extendClass;
    }
    ExtendType.prototype.classBody = function (classBody) {
        return new FrankType(this.className, classBody, this.extendClass);
    };
    ExtendType.prototype.toClass = function () {
        return this.classBody(Object).toClass();
    };
    return ExtendType;
}());
exports.ExtendType = ExtendType;
var EmptyType = /** @class */ (function () {
    function EmptyType(className) {
        this.className = className;
    }
    EmptyType.prototype.classBody = function (classBody) {
        return new BodyType(this.className, classBody);
    };
    EmptyType.prototype.extendsFrom = function (extendClass) {
        return new ExtendType(this.className, extendClass);
    };
    return EmptyType;
}());
exports.EmptyType = EmptyType;
