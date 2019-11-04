"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var frank_native_core_1 = __importDefault(require("frank-native-core"));
var CallStack = require("../callstack/CallStack_Impl");
var addStack = function (cs, func, scope) {
    cs.append(null, func.length === 1 ? function (r) { return func.apply(scope, [r]); } : function (r) { return func.call(scope) && false || r(); }, CallStack.EMPTY_ARGS);
};
module.exports = /** @class */ (function () {
    function AopBuilder_Super() {
        this.scopeAt = frank_native_core_1.default.FrankUtils.getter_setter();
        this.aopFrom = frank_native_core_1.default.FrankUtils.getter_setter();
        this.error = frank_native_core_1.default.FrankUtils.getter_setter();
        var prevs = new Array();
        var posts = new Array();
        this.addPrev = function (func) {
            prevs.push(func);
            return this;
        };
        this.addPost = function (func) {
            posts.push(func);
            return this;
        };
        this.execute = function (receive) {
            var _this = this;
            var cs = new CallStack();
            prevs.forEach(function (f) { return addStack(cs, f, _this.scopeAt()); });
            var aopFunc = this.aopFrom();
            if (aopFunc instanceof Function) {
                addStack(cs, aopFunc, this.scopeAt());
            }
            posts.forEach(function (f) { return addStack(cs, f, _this.scopeAt()); });
            cs.success(receive).error(this.error() || (function (e) { return console.error(e); })).execute();
        };
    }
    return AopBuilder_Super;
}());
