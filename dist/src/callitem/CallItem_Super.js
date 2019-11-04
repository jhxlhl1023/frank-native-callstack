"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var frank_native_core_1 = __importDefault(require("frank-native-core"));
var CallItem_Super = /** @class */ (function () {
    function CallItem_Super() {
        this.variKey = frank_native_core_1.default.FrankUtils.getter_setter();
        this.methodCall = frank_native_core_1.default.FrankUtils.getter_setter();
        this.paramsCall = frank_native_core_1.default.FrankUtils.getter_setter();
        this.next = frank_native_core_1.default.FrankUtils.getter_setter();
        this.loopCall = frank_native_core_1.default.FrankUtils.getter_setter();
        this.loopFrom = frank_native_core_1.default.FrankUtils.getter_setter();
    }
    return CallItem_Super;
}());
exports.CallItem_Super = CallItem_Super;
;
