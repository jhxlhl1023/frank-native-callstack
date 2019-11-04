"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var frank_native_core_1 = __importDefault(require("frank-native-core"));
var AopBuilder_Super_1 = __importDefault(require("./AopBuilder_Super"));
module.exports = frank_native_core_1.default.buildType("AopBuilder").classBody(AopBuilder_Super_1.default).toClass();
