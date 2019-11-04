"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
//FrankUtils    :工具类
//FrankType     :构建框架类的javascript一般类
//FrankClass    :由FrankType构建的框架类
//FrankBasic    :框架内部基类，顶级类
//FrankFactory  :工厂类，用于实例化对象
var FrankUtils = require("./libs/FrankUtils");
var FrankFactory_1 = __importDefault(require("./libs/FrankFactory"));
function buildType(className) {
    return FrankFactory_1.default.buildType(className || "anonymous");
}
;
module.exports = {
    FrankUtils: FrankUtils,
    FrankFactory: FrankFactory_1.default,
    newInstance: FrankFactory_1.default.newInstance,
    buildType: buildType
};
