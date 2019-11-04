import Frank from "frank-native-core";
import CallStack_Super from "./CallStack_Super";
export = Frank.buildType()
  .classBody(CallStack_Super)
  .toClass()
  .statics(
    class {
      currentStack = CallStack_Super.currentCallStack;
    }
  );
