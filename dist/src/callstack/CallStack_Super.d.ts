import CallItem from "../callitem/CallItem_Type";
declare const CallItem: any;
import { CallObject } from "./CallObject";
export default class CallStack_Super {
    static currentCallStack: () => CallStack_Super | null;
    lastItem: () => CallItem | null;
    val: (variKey: string) => any;
    append: (key: null | string | CallItem | CallObject, methodCall?: (...args: any) => void, paramsCall?: () => Array<any>) => this;
    next: (key: string | CallItem | CallObject, methodCall?: (...args: any) => void, paramsCall?: () => Array<any>) => this;
    loop: (loopCall: () => boolean, loopFrom: () => CallItem) => this;
    sleep: (msec: number) => this;
    markAs: (mark: string) => this;
    findMark: (mark: string) => CallItem;
    appendEmpty: () => this;
    goto: (loopCall: () => boolean, loopFrom: () => CallItem) => this;
    mark: (mark: string) => this;
    success(succ: (o: any) => void): this;
    success(): (o: any) => void;
    error(err: (o: Error) => void): this;
    error(): (o: Error) => void;
    complete(comp: (o: any) => void): this;
    complete(): (o: any) => void;
    execute: () => void;
    constructor();
}
export {};
