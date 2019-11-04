import Frank from "frank-native-core";
import { FrankClass } from "frank-native-core/dist/libs/FrankClass";
export class CallItem_Super {
    variKey: (o?: string) => this & string = Frank.FrankUtils.getter_setter();
    methodCall: (o?: (...args: any) => any) => this & ((...args: any) => any) = Frank.FrankUtils.getter_setter();
    paramsCall: (o?: () => Array<any>) => this & (() => Array<any>) = Frank.FrankUtils.getter_setter();
    next: (o?: this) => this = Frank.FrankUtils.getter_setter();
    loopCall: (o?: () => boolean) => this & (() => boolean) = Frank.FrankUtils.getter_setter();
    loopFrom: (o?: () => this) => this & (() => this) = Frank.FrankUtils.getter_setter();
};