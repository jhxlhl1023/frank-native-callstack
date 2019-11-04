import { FrankClass } from "frank-native-core/dist/libs/FrankClass";
import { CallItem_Super } from "./CallItem_Super";
interface CallItem extends CallItem_Super, FrankClass<CallItem_Super, Object> {
}
declare const CallItem: any;
export = CallItem;
