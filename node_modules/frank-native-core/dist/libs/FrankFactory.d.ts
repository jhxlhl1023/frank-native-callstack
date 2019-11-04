import { EmptyType } from "./FrankType";
declare abstract class FrankFactory {
    static newInstance<T>(frankClass: {
        new (): T;
    }): T;
    static buildType(className: string): EmptyType;
}
export = FrankFactory;
