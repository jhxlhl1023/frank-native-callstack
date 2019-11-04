import Frank from "frank-native-core";
import CallStack from "../callstack/CallStack_Type";
const CallStack = require("../callstack/CallStack_Impl");
var addStack = function (cs: CallStack, func: (receive?: (o?: any) => any) => any, scope: any): void {
    cs.append(null, func.length === 1 ? r => func.apply(scope, [r]) : (r: any) => func.call(scope) && false || r(), CallStack.EMPTY_ARGS);
}
export = class AopBuilder_Super {
    scopeAt: (func?: (receive?: (o?: any) => any) => any) => this & ((receive?: (o?: any) => any) => any) = Frank.FrankUtils.getter_setter();
    aopFrom: (func?: (receive?: (o?: any) => any) => any) => this & ((receive?: (o?: any) => any) => any) = Frank.FrankUtils.getter_setter();
    addPrev: (func: (receive?: (o?: any) => any) => any) => this;
    addPost: (func: (receive?: (o?: any) => any) => any) => this;
    error: (func?: (e: Error) => any) => this & ((receive?: (o?: any) => any) => any) = Frank.FrankUtils.getter_setter();
    execute: (receive?: (o?: any) => any) => void;
    constructor() {
        var prevs = new Array<(receive?: (o?: any) => any) => any>();
        var posts = new Array<(receive?: (o?: any) => any) => any>();
        this.addPrev = function (func: (receive?: (o?: any) => any) => any): any {
            prevs.push(func);
            return this;
        };
        this.addPost = function (func: (receive?: (o?: any) => any) => any): any {
            posts.push(func);
            return this;
        };
        this.execute = function (receive?: (o?: any) => any): void {
            var cs = new CallStack();
            prevs.forEach(f => addStack(cs, f, this.scopeAt()));
            var aopFunc = this.aopFrom();
            if (aopFunc instanceof Function) {
                addStack(cs, aopFunc, this.scopeAt());
            }
            posts.forEach(f => addStack(cs, f, this.scopeAt()));
            cs.success(receive).error(this.error() || ((e: Error) => console.error(e))).execute();
        };
    }
};