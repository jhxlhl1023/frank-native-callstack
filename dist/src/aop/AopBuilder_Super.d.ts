declare const _default: {
    new (): {
        scopeAt: (func?: ((receive?: ((o?: any) => any) | undefined) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        aopFrom: (func?: ((receive?: ((o?: any) => any) | undefined) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        addPrev: (func: (receive?: ((o?: any) => any) | undefined) => any) => any;
        addPost: (func: (receive?: ((o?: any) => any) | undefined) => any) => any;
        error: (func?: ((e: Error) => any) | undefined) => any & ((receive?: ((o?: any) => any) | undefined) => any);
        execute: (receive?: ((o?: any) => any) | undefined) => void;
    };
};
export = _default;
