interface Oneline {
    kv: (k: string, v: any) => Oneline;
    done: (k: string, v: any) => any;
}
declare const _default: (new () => Object & import("./callstack/CallStack_Super").default & import("frank-native-core/dist/libs/FrankClass").FrankClass<import("./callstack/CallStack_Super").default, Object> & import("frank-native-core/dist/libs/FrankClass").FrankClass<Object, import("./callstack/CallStack_Super").default & Object & import("frank-native-core/dist/libs/FrankClass").FrankClass<import("./callstack/CallStack_Super").default, Object>>) & import("frank-native-core/dist/libs/FrankClass").FrankClassClass<Object, import("./callstack/CallStack_Super").default & Object & import("frank-native-core/dist/libs/FrankClass").FrankClass<import("./callstack/CallStack_Super").default, Object>> & {
    currentStack: () => import("./callstack/CallStack_Super").default | null;
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
export default _default;
