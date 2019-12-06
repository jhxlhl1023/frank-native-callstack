import Frank from "frank-native-core";
import CallItem from "../callitem/CallItem_Type";
const CallItem = require("../callitem/CallItem");
import { CallObject } from "./CallObject";
let current_stack = null as any;
export = class CallStack_Super  {
    public static currentCallStack(): CallStack_Super | null {
    return current_stack;
  }
  lastItem: () => CallItem | null;
  val: (variKey: string) => any;
  append: (key: null | string | CallItem | CallObject, methodCall?: (...args: any) => void, paramsCall?: () => Array<any>) => CallStack_Super;
  next: (key: string | CallItem | CallObject, methodCall?: (...args: any) => void, paramsCall?: () => Array<any>) => CallStack_Super;
  loop: (loopCall: () => boolean, loopFrom: () => CallItem) => CallStack_Super;
  sleep: (msec: number) => CallStack_Super;
  markAs: (mark: string) => CallStack_Super;
  findMark: (mark: string) => CallItem;
  success ( succ: ( o: any ) => void): CallStack_Super;
  success (): ( o: any ) => void;
  success(){
    return Frank.FrankUtils.error("Not Implement") as any;
  }
  error ( err: ( o: Error ) => void): CallStack_Super;
  error (): ( o: Error ) => void;
  error(){
    return Frank.FrankUtils.error("Not Implement") as any;
  }
  complete ( comp: ( o: any ) => void): CallStack_Super;
  complete (): ( o: any ) => void;
  complete(){
    return Frank.FrankUtils.error("Not Implement") as any;
  }
  execute:() =>void;
  //
  constructor() {
    var that = this;
    var priv__: { [key: string]: any } = {};
    var stackResults: { [key: string]: any } = {};
    /**
     * All items
     */
    var headItem: CallItem | null = null;
    var lastItem: CallItem | null = null;
    var execItem: CallItem | null = null;
    var markedItemMap = new Map<string, CallItem | null>();
    this.lastItem = () => lastItem;
    this.val = function(variKey: string): any {
      if (variKey === null) {
        return null;
      } else if (!stackResults.hasOwnProperty(variKey)) {
        return null;
      } else {
        return stackResults[variKey];
      }
    };
    this.append = function() {
      var ci = priv__.createItem.apply(this, arguments);
      if (headItem === null && lastItem === null) {
        headItem = lastItem = ci;
      } else if (headItem !== null && lastItem !== null) {
        lastItem.next((lastItem = ci));
      } else {
        throw new Error("CallStack Append Imspossible Error");
      }
      return this as any;
    };
    this.next = function() {
      if (execItem) {
        var ci = priv__.createItem.apply(this, arguments);
        execItem.next(ci.next(execItem.next()));
      }
      return this as any;
    };
    this.loop = function(loopCall, loopFrom) {
      if (lastItem) {
        lastItem.loopCall(loopCall);
        lastItem.loopFrom(loopFrom);
      }
      return this as any;
    };
    this.sleep = function(msec) {
      if (lastItem) {
        lastItem.methodCall(
          (function(oldCall) {
            return function(this: any) {
              var args = new Array<any>();
              for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
              }
              setTimeout(() => oldCall.apply(this, args), msec);
            };
          })(lastItem.methodCall())
        );
      }
      return this as any;
    };
    this.execute = function() {
      try {
        execItem = headItem;
        priv__.execApply();
      } catch (error) {
        priv__.handleError(error);
      }
    };
    this.markAs = function(mark) {
      markedItemMap.set(mark, lastItem);
      return this as any;
    };
    this.findMark = mark => {
      var item = markedItemMap.get(mark);
      if (item) {
        return item;
      } else {
        throw new Error("Not exist item " + mark);
      }
    };
    this.success = Frank.FrankUtils.getter_setter();
    this.error = Frank.FrankUtils.getter_setter();
    this.complete = Frank.FrankUtils.getter_setter();
    priv__.createItem = function() {
      if (
        arguments.length === 1 && //e
        arguments[0].hasOwnProperty("isInstance") && //e
        arguments[0].isInstance(CallItem)
      ) {
        return arguments[0];
      } else {
        var variKey = null;
        var methodCall = null;
        var paramsCall = null;
        if (arguments.length === 1) {
          variKey = arguments[0].variKey;
          methodCall = arguments[0].methodCall;
          paramsCall = arguments[0].paramsCall;
        } else if (arguments.length === 3) {
          variKey = arguments[0];
          methodCall = arguments[1];
          paramsCall = arguments[2];
        } else {
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
    priv__.params2args = function(params: any) {
      if (params === null) {
        // (cb)
        params = [priv__.receive];
      } else if (Array.isArray(params)) {
        // (a,b,c,cb)
        params = params.concat([priv__.receive]);
      } else {
        // (params,cb)
        params = [params, priv__.receive];
      }
      return params;
    };
    priv__.execMethod = function() {
      if (execItem) {
        return execItem.methodCall();
      } else {
        priv__.handleError(new Error("Empty Item!"));
      }
    };
    priv__.execArgs = function() {
      if (execItem) {
        var params = null;
        if (!execItem.paramsCall()) {
          params = null;
        } else if (typeof execItem.paramsCall() !== "function") {
          throw new Error("paramsCall must be a function");
        } else {
          params = execItem.paramsCall().apply(that);
        }
        return priv__.params2args(params);
      } else {
        priv__.handleError(new Error("Empty Item!"));
      }
    };
    priv__.bindCurrentStack = (func: () => any) => {
      // 1. backup
      let temp = current_stack;
      // 2. store
      current_stack = that;
      try {
        func();
      } finally {
        // 3. resume
        current_stack = temp;
      }
    };
    priv__.execApply = function() {
      priv__.bindCurrentStack(() => {
        priv__.execMethod().apply(that, priv__.execArgs());
      });
    };
    priv__.receive = function(o: any) {
      priv__.bindCurrentStack(() => {
        if (execItem) {
          try {
            priv__.variSave(execItem.variKey(), o);
            if (priv__.ifLoopContinueAndJump()) {
              execItem = execItem.loopFrom() ? execItem.loopFrom().call(that) : execItem;
              priv__.execApply();
            } else if ((execItem = execItem.next()) !== null) {
              priv__.execApply();
            } else {
              priv__.handleSuccess(o);
            }
          } catch (error) {
            priv__.handleError(error);
          }
        } else {
          priv__.handleError(new Error("Empty Item!"));
        }
      });
    };
    priv__.handleError = function(e: Error) {
      priv__.bindCurrentStack(() => {
        try {
          if (that.error()) {
            that.error().apply(that, [e]);
          }
        } catch (e1) {
          // catch error from error()
          console.error(e1);
        } finally {
          priv__.handleComplete(e);
        }
      });
    };
    priv__.handleSuccess = function(o: any) {
      priv__.bindCurrentStack(() => {
        if (that.success()) {
          that.success().apply(that, [o]);
        }
        priv__.handleComplete(o);
      });
    };
    priv__.handleComplete = function(oe: any) {
      priv__.bindCurrentStack(() => {
        try {
          if (that.complete()) {
            that.complete().apply(that, [oe]);
          }
        } catch (err) {
          console.error(err);
        }
      });
    };
    priv__.variSave = function(variKey: string, value: any) {
      if (value instanceof Error) {
        throw value;
      }
      if (variKey) {
        stackResults[variKey] = value;
      }
    };
    priv__.ifLoopContinueAndJump = function() {
      if (execItem) {
        var result = !!execItem.loopCall() && execItem.loopCall().call(that);
        return result;
      } else {
        priv__.handleError(new Error("Empty Item!"));
      }
    };
  }
};
