"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var frank_native_core_1 = __importDefault(require("frank-native-core"));
var CallItem = require("../callitem/CallItem");
var current_stack = null;
module.exports = /** @class */ (function () {
    //
    function CallStack_Super() {
        var that = this;
        var priv__ = {};
        var stackResults = {};
        /**
         * All items
         */
        var headItem = null;
        var lastItem = null;
        var execItem = null;
        var markedItemMap = new Map();
        this.lastItem = function () { return lastItem; };
        this.val = function (variKey) {
            if (variKey === null) {
                return null;
            }
            else if (!stackResults.hasOwnProperty(variKey)) {
                return null;
            }
            else {
                return stackResults[variKey];
            }
        };
        this.append = function () {
            var ci = priv__.createItem.apply(this, arguments);
            if (headItem === null && lastItem === null) {
                headItem = lastItem = ci;
            }
            else if (headItem !== null && lastItem !== null) {
                lastItem.next((lastItem = ci));
            }
            else {
                throw new Error("CallStack Append Imspossible Error");
            }
            return this;
        };
        this.next = function () {
            if (execItem) {
                var ci = priv__.createItem.apply(this, arguments);
                execItem.next(ci.next(execItem.next()));
            }
            return this;
        };
        this.loop = function (loopCall, loopFrom) {
            if (lastItem) {
                lastItem.loopCall(loopCall);
                lastItem.loopFrom(loopFrom);
            }
            return this;
        };
        this.sleep = function (msec) {
            if (lastItem) {
                lastItem.methodCall((function (oldCall) {
                    return function () {
                        var _this = this;
                        var args = new Array();
                        for (var i = 0; i < arguments.length; i++) {
                            args.push(arguments[i]);
                        }
                        setTimeout(function () { return oldCall.apply(_this, args); }, msec);
                    };
                })(lastItem.methodCall()));
            }
            return this;
        };
        this.execute = function () {
            try {
                execItem = headItem;
                priv__.execApply();
            }
            catch (error) {
                priv__.handleError(error);
            }
        };
        this.markAs = function (mark) {
            markedItemMap.set(mark, lastItem);
            return this;
        };
        this.findMark = function (mark) {
            var item = markedItemMap.get(mark);
            if (item) {
                return item;
            }
            else {
                throw new Error("Not exist item " + mark);
            }
        };
        this.success = frank_native_core_1.default.FrankUtils.getter_setter();
        this.error = frank_native_core_1.default.FrankUtils.getter_setter();
        this.complete = frank_native_core_1.default.FrankUtils.getter_setter();
        priv__.createItem = function () {
            if (arguments.length === 1 && //e
                arguments[0].hasOwnProperty("isInstance") && //e
                arguments[0].isInstance(CallItem)) {
                return arguments[0];
            }
            else {
                var variKey = null;
                var methodCall = null;
                var paramsCall = null;
                if (arguments.length === 1) {
                    variKey = arguments[0].variKey;
                    methodCall = arguments[0].methodCall;
                    paramsCall = arguments[0].paramsCall;
                }
                else if (arguments.length === 3) {
                    variKey = arguments[0];
                    methodCall = arguments[1];
                    paramsCall = arguments[2];
                }
                else {
                    throw new Error("Number of args is wrong");
                }
                if (typeof methodCall !== "function") {
                    throw new Error("methodCall must be a function");
                }
                return new CallItem()
                    .variKey(variKey)
                    .methodCall(methodCall)
                    .paramsCall(paramsCall);
            }
        };
        priv__.params2args = function (params) {
            if (params === null) {
                // (cb)
                params = [priv__.receive];
            }
            else if (Array.isArray(params)) {
                // (a,b,c,cb)
                params = params.concat([priv__.receive]);
            }
            else {
                // (params,cb)
                params = [params, priv__.receive];
            }
            return params;
        };
        priv__.execMethod = function () {
            if (execItem) {
                return execItem.methodCall();
            }
            else {
                priv__.handleError(new Error("Empty Item!"));
            }
        };
        priv__.execArgs = function () {
            if (execItem) {
                var params = null;
                if (!execItem.paramsCall()) {
                    params = null;
                }
                else if (typeof execItem.paramsCall() !== "function") {
                    throw new Error("paramsCall must be a function");
                }
                else {
                    params = execItem.paramsCall().apply(that);
                }
                return priv__.params2args(params);
            }
            else {
                priv__.handleError(new Error("Empty Item!"));
            }
        };
        priv__.bindCurrentStack = function (func) {
            // 1. backup
            var temp = current_stack;
            // 2. store
            current_stack = that;
            try {
                func();
            }
            finally {
                // 3. resume
                current_stack = temp;
            }
        };
        priv__.execApply = function () {
            priv__.bindCurrentStack(function () {
                priv__.execMethod().apply(that, priv__.execArgs());
            });
        };
        priv__.receive = function (o) {
            priv__.bindCurrentStack(function () {
                if (execItem) {
                    try {
                        priv__.variSave(execItem.variKey(), o);
                        if (priv__.ifLoopContinueAndJump()) {
                            execItem = execItem.loopFrom() ? execItem.loopFrom().call(that) : execItem;
                            priv__.execApply();
                        }
                        else if ((execItem = execItem.next()) !== null) {
                            priv__.execApply();
                        }
                        else {
                            priv__.handleSuccess(o);
                        }
                    }
                    catch (error) {
                        priv__.handleError(error);
                    }
                }
                else {
                    priv__.handleError(new Error("Empty Item!"));
                }
            });
        };
        priv__.handleError = function (e) {
            priv__.bindCurrentStack(function () {
                try {
                    if (that.error()) {
                        that.error().apply(that, [e]);
                    }
                }
                catch (e1) {
                    // catch error from error()
                    console.error(e1);
                }
                finally {
                    priv__.handleComplete(e);
                }
            });
        };
        priv__.handleSuccess = function (o) {
            priv__.bindCurrentStack(function () {
                if (that.success()) {
                    that.success().apply(that, [o]);
                }
                priv__.handleComplete(o);
            });
        };
        priv__.handleComplete = function (oe) {
            priv__.bindCurrentStack(function () {
                try {
                    if (that.complete()) {
                        that.complete().apply(that, [oe]);
                    }
                }
                catch (err) {
                    console.error(err);
                }
            });
        };
        priv__.variSave = function (variKey, value) {
            if (value instanceof Error) {
                throw value;
            }
            if (variKey) {
                stackResults[variKey] = value;
            }
        };
        priv__.ifLoopContinueAndJump = function () {
            if (execItem) {
                var result = !!execItem.loopCall() && execItem.loopCall().call(that);
                return result;
            }
            else {
                priv__.handleError(new Error("Empty Item!"));
            }
        };
    }
    CallStack_Super.currentCallStack = function () {
        return current_stack;
    };
    CallStack_Super.prototype.success = function () {
        return frank_native_core_1.default.FrankUtils.error("Not Implement");
    };
    CallStack_Super.prototype.error = function () {
        return frank_native_core_1.default.FrankUtils.error("Not Implement");
    };
    CallStack_Super.prototype.complete = function () {
        return frank_native_core_1.default.FrankUtils.error("Not Implement");
    };
    return CallStack_Super;
}());
