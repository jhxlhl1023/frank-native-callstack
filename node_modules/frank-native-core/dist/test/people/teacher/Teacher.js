"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var index_1 = __importDefault(require("../../../index"));
var People_1 = __importDefault(require("../People"));
module.exports = index_1.default.buildType("Teacher").extendsFrom(People_1.default).classBody(/** @class */ (function () {
    function class_1() {
        this.job = function () {
            return "teacher";
        };
    }
    return class_1;
}())).toClass();
