import FrankUtils = require("./libs/FrankUtils");
import FrankFactory from "./libs/FrankFactory";
import { EmptyType } from "./libs/FrankType";
declare function buildType(className?: string): EmptyType;
declare const _default: {
    FrankUtils: typeof FrankUtils;
    FrankFactory: typeof FrankFactory;
    newInstance: typeof FrankFactory.newInstance;
    buildType: typeof buildType;
};
export = _default;
