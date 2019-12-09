import CallItem from "../callitem/CallItem_Type";
declare const CallItem: any;
import { CallObject } from "./CallObject";
export default class CallStack_Super {
    static currentCallStack: () => CallStack_Super | null;
    lastItem: () => CallItem | null;
    val: (variKey: string) => any;
    append: <T>(this: T, key: null | string | CallItem | CallObject, methodCall?: (...args: any) => void, paramsCall?: () => Array<any>) => T;
    next: <T>(this: T, key: string | CallItem | CallObject, methodCall?: (...args: any) => void, paramsCall?: () => Array<any>) => T;
    loop: <T>(this: T, loopCall: () => boolean, loopFrom: () => CallItem) => T;
    sleep: <T>(this: T, msec: number) => T;
    markAs: <T>(this: T, mark: string) => T;
    findMark: (mark: string) => CallItem;
    success<T>(this: T, succ: (o: any) => void): T;
    success<T>(this: T): (o: any) => void;
    error<T>(this: T, err: (o: Error) => void): CallStack_Super;
    error<T>(this: T): (o: Error) => void;
    complete(comp: (o: any) => void): CallStack_Super;
    complete(): (o: any) => void;
    execute: () => void;
    constructor();
}
export {};
