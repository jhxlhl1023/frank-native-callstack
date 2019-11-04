"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var index_1 = __importDefault(require("../../../index"));
var Teacher_1 = __importDefault(require("./Teacher"));
var Senior_1 = __importDefault(require("../../level/Senior"));
module.exports = index_1.default.buildType().classBody(Senior_1.default).extendsFrom(Teacher_1.default).toClass();
