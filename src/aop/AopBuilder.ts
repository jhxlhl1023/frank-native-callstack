import AopBuilder_Super from "./AopBuilder_Super";
import { FrankClass } from "frank-native-core/dist/libs/FrankClass";
interface AopBuilder extends AopBuilder_Super, FrankClass<AopBuilder_Super, Object> { }
const AopBuilder = require('./AopBuilder_Impl');
export = AopBuilder;

