import { EmptyType } from "./FrankType";
abstract class FrankFactory {
    public static newInstance<T>(frankClass: { new(): T }): T {
        return <T>new frankClass();
    };
    public static buildType(className: string): EmptyType {
        return new EmptyType(className || "anoys");
    };
}
export = FrankFactory;