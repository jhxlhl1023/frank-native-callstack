export interface FrankClassClass<D, S> {
    isAssignableFrom: (clazz: {
        new (): any;
    }) => boolean;
    newInstance: () => D & S & FrankClass<D, S>;
    superApply: (name: string, args?: Array<any>) => any;
    statics: <C>(clazz: {
        new (): C;
    }) => this & C;
}
export interface FrankClass<D, S> {
    isInstance: (clazz: {
        new (): any;
    }) => boolean;
}
