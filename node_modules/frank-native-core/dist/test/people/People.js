"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var index_1 = __importDefault(require("../../index"));
module.exports = index_1.default.buildType("People").classBody(/** @class */ (function () {
    function P() {
        this.name = index_1.default.FrankUtils.getter_setter();
        this.age = index_1.default.FrankUtils.getter_setter();
        this.job = index_1.default.FrankUtils.abstract4override;
        this.say = function () {
            return "I am a " + this.job() + ", " + this.name() + " , " + this.age() + " years old.";
        };
    }
    return P;
}())).toClass();
