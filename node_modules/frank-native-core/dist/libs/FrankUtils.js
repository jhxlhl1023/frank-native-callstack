"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getter_setter() {
    var column = null;
    return function (obj) {
        if (arguments.length == 0) {
            return column;
        }
        else if (arguments.length == 1) {
            column = obj;
            return this;
        }
        else {
            error("error arguments length");
        }
    };
}
exports.getter_setter = getter_setter;
;
/**
 * abstract method
 */
function abstract4override() {
    error("abstruct method must be override");
}
exports.abstract4override = abstract4override;
;
/**
 * 抛出自定义异常
 */
function error(msg) {
    throw new Error(msg);
}
exports.error = error;
;
/**
 * 获取超类的方法
 */
function findSuperMethod(thisObj, methodName) {
    var __super = findSuper(thisObj, methodName);
    if (__super == null) {
        return null;
    }
    else {
        return __super[methodName];
    }
}
exports.findSuperMethod = findSuperMethod;
;
/**
 * 获取相对方法的超类
 */
function findSuper(thisObj, methodName) {
    var thisMethod = thisObj[methodName];
    if (thisMethod == null) {
        return null;
    }
    else {
        var __super = thisObj;
        while (__super[methodName] === thisMethod) {
            __super = __super.__proto__;
        }
        if (__super[methodName] == null) {
            return null;
        }
        else {
            return __super;
        }
    }
}
exports.findSuper = findSuper;
;
