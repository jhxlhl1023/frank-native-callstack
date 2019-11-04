"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var frank_native_core_1 = __importDefault(require("frank-native-core"));
var CallStack_Impl_1 = __importDefault(require("./callstack/CallStack_Impl"));
var AopBuilder_Impl_1 = __importDefault(require("./aop/AopBuilder_Impl"));
module.exports = frank_native_core_1.default.buildType("CallStack")
    .extendsFrom(CallStack_Impl_1.default)
    .toClass()
    .statics(/** @class */ (function () {
    function class_1() {
        this.currentStack = CallStack_Impl_1.default.currentStack;
        this.AopBuilder = AopBuilder_Impl_1.default;
        this.EMPTY_ARGS = function () { return []; };
        this.ASSIGN = function (params, receive) { return receive(params); };
        this.o = function (k, v) {
            var o = {};
            var builder = {
                kv: function (k, v) {
                    if (!k) {
                        throw new Error("key can not be null");
                    }
                    else {
                        var ks = k.split(".");
                        var obj = o;
                        var i = 0;
                        while (i < ks.length) {
                            if (i === ks.length - 1) {
                                obj[ks[i]] = v;
                            }
                            else {
                                obj = obj[ks[i]] = obj[ks[i]] || {};
                            }
                            i++;
                        }
                    }
                    return this;
                },
                done: function (k, v) {
                    if (k) {
                        this.kv(k, v);
                    }
                    return o;
                }
            };
            if (k) {
                builder.kv(k, v);
            }
            return builder;
        };
    }
    return class_1;
}()));
