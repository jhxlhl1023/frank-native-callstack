"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var index_1 = __importDefault(require("../../index"));
var Level_1 = __importDefault(require("./Level"));
module.exports = index_1.default.buildType().extendsFrom(Level_1.default).classBody(/** @class */ (function () {
    function class_1() {
        this.level = function () { return "junior"; };
    }
    return class_1;
}())).toClass();
