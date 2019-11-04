"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var index_1 = __importDefault(require("../../index"));
module.exports = index_1.default.buildType().classBody(/** @class */ (function () {
    function class_1() {
        this.job = function () {
            return this.level() + " " + this.superApply("job");
        };
    }
    return class_1;
}())).toClass();
