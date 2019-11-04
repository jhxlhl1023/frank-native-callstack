import { FrankClass } from "frank-native-core/dist/libs/FrankClass";
import { CallItem_Super } from "./CallItem_Super";
interface CallItem extends CallItem_Super, FrankClass<CallItem_Super, Object> { };
const CallItem = require('./CallItem_Impl');
export = CallItem;

