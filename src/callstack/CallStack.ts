import { FrankClass } from "frank-native-core/dist/libs/FrankClass";
import CallStack_Super from "./CallStack_Super";
interface CallStack extends CallStack_Super, FrankClass<CallStack_Super, Object> { };
import CallStack from './CallStack_Impl';
export = CallStack;