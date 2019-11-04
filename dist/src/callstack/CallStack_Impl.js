"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var frank_native_core_1 = __importDefault(require("frank-native-core"));
var CallStack_Super_1 = __importDefault(require("./CallStack_Super"));
module.exports = frank_native_core_1.default.buildType()
    .classBody(CallStack_Super_1.default)
    .toClass()
    .statics(/** @class */ (function () {
    function class_1() {
        this.currentStack = CallStack_Super_1.default.currentCallStack;
    }
    return class_1;
}()));
