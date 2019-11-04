"use strict";
var FrankType_1 = require("./FrankType");
var FrankFactory = /** @class */ (function () {
    function FrankFactory() {
    }
    FrankFactory.newInstance = function (frankClass) {
        return new frankClass();
    };
    ;
    FrankFactory.buildType = function (className) {
        return new FrankType_1.EmptyType(className || "anoys");
    };
    ;
    return FrankFactory;
}());
module.exports = FrankFactory;
