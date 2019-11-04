import { FrankClass, FrankClassClass } from "./FrankClass";
export declare class FrankType<D, S> {
    toClass: () => {
        new (): D & S & FrankClass<D, S>;
    } & FrankClassClass<D, S>;
    constructor(className: string, classBody: {
        new (): D;
    }, superClass: {
        new (): S;
    });
}
export declare class BodyType<D> {
    className: string;
    classBody: {
        new (): D;
    };
    constructor(className: string, classBody: {
        new (): D;
    });
    extendsFrom<S>(superClass: {
        new (): S;
    }): FrankType<D, S>;
    toClass(): {
        new (): D & Object & FrankClass<D, Object>;
    } & FrankClassClass<D, Object>;
}
export declare class ExtendType<S> {
    className: string;
    extendClass: {
        new (): S;
    };
    constructor(className: string, extendClass: {
        new (): S;
    });
    classBody<D>(classBody: {
        new (): D;
    }): FrankType<D, S>;
    toClass(): {
        new (): Object & S & FrankClass<Object, S>;
    } & FrankClassClass<Object, S>;
}
export declare class EmptyType {
    className: string;
    constructor(className: string);
    classBody<D>(classBody: {
        new (): D;
    }): BodyType<D>;
    extendsFrom<S>(extendClass: {
        new (): S;
    }): ExtendType<S>;
}
