"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var frank_native_core_1 = __importDefault(require("frank-native-core"));
var CallItem_Super_1 = require("./CallItem_Super");
module.exports = frank_native_core_1.default.buildType().classBody(CallItem_Super_1.CallItem_Super).toClass();
