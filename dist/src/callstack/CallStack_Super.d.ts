import CallItem from "../callitem/CallItem_Type";
declare const CallItem: any;
import { CallObject } from "./CallObject";
import CallStack from "./CallStack_Type";
declare const _default: {
    new (): {
        lastItem: () => CallItem | null;
        val: (variKey: string) => any;
        append: (key: string | CallItem | CallObject | null, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => any;
        next: (key: string | CallItem | CallObject, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => any;
        loop: (loopCall: () => boolean, loopFrom: () => CallItem) => any;
        sleep: (msec: number) => any;
        markAs: (mark: string) => any;
        findMark: (mark: string) => CallItem;
        success: (succ?: ((o: any) => any) | undefined) => any & ((o: any) => any);
        error: (err?: ((o: Error) => any) | undefined) => any & ((o: Error) => any);
        complete: (comp?: ((o: any) => any) | undefined) => any & ((o: any) => any);
        execute: () => void;
    };
    currentCallStack(): CallStack | null;
};
export = _default;
