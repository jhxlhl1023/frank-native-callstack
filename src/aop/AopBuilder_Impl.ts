import Frank from "frank-native-core";
import AopBuilder_Super from "./AopBuilder_Super";
export = Frank.buildType("AopBuilder").classBody(AopBuilder_Super).toClass();