interface Oneline {
    kv: (k: string, v: any) => Oneline;
    done: (k: string, v: any) => any;
}
declare const _default: (new () => Object & {
    lastItem: () => import("./callitem/CallItem_Type").default | null;
    val: (variKey: string) => any;
    append: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject | null, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    next: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    loop: (loopCall: () => boolean, loopFrom: () => import("./callitem/CallItem_Type").default) => import("./callstack/CallStack_Type").default;
    sleep: (msec: number) => import("./callstack/CallStack_Type").default;
    markAs: (mark: string) => import("./callstack/CallStack_Type").default;
    findMark: (mark: string) => import("./callitem/CallItem_Type").default;
    success(succ: (o: any) => void): import("./callstack/CallStack_Type").default;
    success(): (o: any) => void;
    error(err: (o: Error) => void): import("./callstack/CallStack_Type").default;
    error(): (o: Error) => void;
    complete(comp: (o: any) => void): import("./callstack/CallStack_Type").default;
    complete(): (o: any) => void;
    execute: () => void;
} & import("frank-native-core/dist/libs/FrankClass").FrankClass<{
    lastItem: () => import("./callitem/CallItem_Type").default | null;
    val: (variKey: string) => any;
    append: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject | null, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    next: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    loop: (loopCall: () => boolean, loopFrom: () => import("./callitem/CallItem_Type").default) => import("./callstack/CallStack_Type").default;
    sleep: (msec: number) => import("./callstack/CallStack_Type").default;
    markAs: (mark: string) => import("./callstack/CallStack_Type").default;
    findMark: (mark: string) => import("./callitem/CallItem_Type").default;
    success(succ: (o: any) => void): import("./callstack/CallStack_Type").default;
    success(): (o: any) => void;
    error(err: (o: Error) => void): import("./callstack/CallStack_Type").default;
    error(): (o: Error) => void;
    complete(comp: (o: any) => void): import("./callstack/CallStack_Type").default;
    complete(): (o: any) => void;
    execute: () => void;
}, Object> & import("frank-native-core/dist/libs/FrankClass").FrankClass<Object, {
    lastItem: () => import("./callitem/CallItem_Type").default | null;
    val: (variKey: string) => any;
    append: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject | null, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    next: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    loop: (loopCall: () => boolean, loopFrom: () => import("./callitem/CallItem_Type").default) => import("./callstack/CallStack_Type").default;
    sleep: (msec: number) => import("./callstack/CallStack_Type").default;
    markAs: (mark: string) => import("./callstack/CallStack_Type").default;
    findMark: (mark: string) => import("./callitem/CallItem_Type").default;
    success(succ: (o: any) => void): import("./callstack/CallStack_Type").default;
    success(): (o: any) => void;
    error(err: (o: Error) => void): import("./callstack/CallStack_Type").default;
    error(): (o: Error) => void;
    complete(comp: (o: any) => void): import("./callstack/CallStack_Type").default;
    complete(): (o: any) => void;
    execute: () => void;
} & Object & import("frank-native-core/dist/libs/FrankClass").FrankClass<{
    lastItem: () => import("./callitem/CallItem_Type").default | null;
    val: (variKey: string) => any;
    append: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject | null, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    next: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    loop: (loopCall: () => boolean, loopFrom: () => import("./callitem/CallItem_Type").default) => import("./callstack/CallStack_Type").default;
    sleep: (msec: number) => import("./callstack/CallStack_Type").default;
    markAs: (mark: string) => import("./callstack/CallStack_Type").default;
    findMark: (mark: string) => import("./callitem/CallItem_Type").default;
    success(succ: (o: any) => void): import("./callstack/CallStack_Type").default;
    success(): (o: any) => void;
    error(err: (o: Error) => void): import("./callstack/CallStack_Type").default;
    error(): (o: Error) => void;
    complete(comp: (o: any) => void): import("./callstack/CallStack_Type").default;
    complete(): (o: any) => void;
    execute: () => void;
}, Object>>) & import("frank-native-core/dist/libs/FrankClass").FrankClassClass<Object, {
    lastItem: () => import("./callitem/CallItem_Type").default | null;
    val: (variKey: string) => any;
    append: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject | null, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    next: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    loop: (loopCall: () => boolean, loopFrom: () => import("./callitem/CallItem_Type").default) => import("./callstack/CallStack_Type").default;
    sleep: (msec: number) => import("./callstack/CallStack_Type").default;
    markAs: (mark: string) => import("./callstack/CallStack_Type").default;
    findMark: (mark: string) => import("./callitem/CallItem_Type").default;
    success(succ: (o: any) => void): import("./callstack/CallStack_Type").default;
    success(): (o: any) => void;
    error(err: (o: Error) => void): import("./callstack/CallStack_Type").default;
    error(): (o: Error) => void;
    complete(comp: (o: any) => void): import("./callstack/CallStack_Type").default;
    complete(): (o: any) => void;
    execute: () => void;
} & Object & import("frank-native-core/dist/libs/FrankClass").FrankClass<{
    lastItem: () => import("./callitem/CallItem_Type").default | null;
    val: (variKey: string) => any;
    append: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject | null, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    next: (key: string | import("./callitem/CallItem_Type").default | import("./callstack/CallObject").CallObject, methodCall?: ((...args: any) => void) | undefined, paramsCall?: (() => any[]) | undefined) => import("./callstack/CallStack_Type").default;
    loop: (loopCall: () => boolean, loopFrom: () => import("./callitem/CallItem_Type").default) => import("./callstack/CallStack_Type").default;
    sleep: (msec: number) => import("./callstack/CallStack_Type").default;
    markAs: (mark: string) => import("./callstack/CallStack_Type").default;
    findMark: (mark: string) => import("./callitem/CallItem_Type").default;
    success(succ: (o: any) => void): import("./callstack/CallStack_Type").default;
    success(): (o: any) => void;
    error(err: (o: Error) => void): import("./callstack/CallStack_Type").default;
    error(): (o: Error) => void;
    complete(comp: (o: any) => void): import("./callstack/CallStack_Type").default;
    complete(): (o: any) => void;
    execute: () => void;
}, Object>> & {
    currentStack: typeof import("./callstack/CallStack_Super").currentCallStack;
    AopBuilder: (new () => {
        scopeAt: (func?: ((receive?: ((o?: any) => any) | undefined) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        aopFrom: (func?: ((receive?: ((o?: any) => any) | undefined) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        addPrev: (func: (receive?: ((o?: any) => any) | undefined) => any) => any;
        addPost: (func: (receive?: ((o?: any) => any) | undefined) => any) => any;
        error: (func?: ((e: Error) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        execute: (receive?: ((o?: any) => any) | undefined) => void;
    } & Object & import("frank-native-core/dist/libs/FrankClass").FrankClass<{
        scopeAt: (func?: ((receive?: ((o?: any) => any) | undefined) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        aopFrom: (func?: ((receive?: ((o?: any) => any) | undefined) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        addPrev: (func: (receive?: ((o?: any) => any) | undefined) => any) => any;
        addPost: (func: (receive?: ((o?: any) => any) | undefined) => any) => any;
        error: (func?: ((e: Error) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        execute: (receive?: ((o?: any) => any) | undefined) => void;
    }, Object>) & import("frank-native-core/dist/libs/FrankClass").FrankClassClass<{
        scopeAt: (func?: ((receive?: ((o?: any) => any) | undefined) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        aopFrom: (func?: ((receive?: ((o?: any) => any) | undefined) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        addPrev: (func: (receive?: ((o?: any) => any) | undefined) => any) => any;
        addPost: (func: (receive?: ((o?: any) => any) | undefined) => any) => any;
        error: (func?: ((e: Error) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        execute: (receive?: ((o?: any) => any) | undefined) => void;
    }, Object>;
    EMPTY_ARGS: () => never[];
    ASSIGN: (params: any, receive: (o: any) => any) => void;
    o: (k: string, v: any) => Oneline;
};
export = _default;
