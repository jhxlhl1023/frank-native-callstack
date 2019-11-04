export function getter_setter() {
    var column: any = null;
    return function (this: any, obj?: any) {
        if (arguments.length == 0) {
            return column;
        } else if (arguments.length == 1) {
            column = obj;
            return this;
        } else {
            error("error arguments length");
        }
    };
};
/**
 * abstract method
 */
export function abstract4override() {
    error("abstruct method must be override");
};
/**
 * 抛出自定义异常
 */
export function error(msg?: string) {
    throw new Error(msg);
};
/**
 * 获取超类的方法
 */
export function findSuperMethod(thisObj: any, methodName: string) {
    var __super = findSuper(thisObj, methodName);
    if (__super == null) {
        return null;
    } else {
        return __super[methodName];
    }
};
/**
 * 获取相对方法的超类
 */
export function findSuper(thisObj: any, methodName: string) {
    var thisMethod = thisObj[methodName];
    if (thisMethod == null) {
        return null;
    } else {
        var __super = thisObj;
        while (__super[methodName] === thisMethod) {
            __super = __super.__proto__;
        }
        if (__super[methodName] == null) {
            return null;
        } else {
            return __super;
        }
    }
};