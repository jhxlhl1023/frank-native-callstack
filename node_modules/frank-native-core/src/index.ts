//FrankUtils    :工具类
//FrankType     :构建框架类的javascript一般类
//FrankClass    :由FrankType构建的框架类
//FrankBasic    :框架内部基类，顶级类
//FrankFactory  :工厂类，用于实例化对象
import FrankUtils = require("./libs/FrankUtils");
import FrankFactory from "./libs/FrankFactory";
import { EmptyType } from "./libs/FrankType";
function buildType(className?: string): EmptyType {
    return FrankFactory.buildType(className || "anonymous");
};
export = {
    FrankUtils: FrankUtils,
    FrankFactory: FrankFactory,
    newInstance: FrankFactory.newInstance,
    buildType: buildType
};