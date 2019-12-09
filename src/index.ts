import Frank from "frank-native-core";
import CallStack from "./callstack/CallStack_Impl";
import AopBuilder from "./aop/AopBuilder_Impl";
interface Oneline {
  kv: (k: string, v: any) => Oneline;
  done: (k: string, v: any) => any;
}
export default Frank.buildType("CallStack")
  .extendsFrom(CallStack)
  .toClass()
  .statics(
    class {
      currentStack = CallStack.currentStack;
      AopBuilder = AopBuilder;
      EMPTY_ARGS = () => [];
      ASSIGN: (params: any, receive: (o: any) => any) => void = (params: any, receive: (o: any) => any): void => receive(params);
      o: (k: string, v: any) => Oneline = function(k: string, v: any): Oneline {
        var o: { [key: string]: any } = {};
        var builder = {
          kv: function(k: string, v: any) {
            if (!k) {
              throw new Error("key can not be null");
            } else {
              var obj = o;
              var keys = k.split(".");
              var lastKey = keys.pop() as string;
              keys.reduce((obj, key) => (obj = obj[key] = obj[key] || {}), obj);
              obj[lastKey] = v;
            }
            return this;
          },
          done: function(k: any, v: any) {
            if (k) this.kv(k, v);
            return o;
          },
        };
        if (k) {
          builder.kv(k, v);
        }
        return builder;
      };
    }
  );
