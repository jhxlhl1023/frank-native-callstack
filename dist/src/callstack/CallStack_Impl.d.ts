import CallStack_Super from "./CallStack_Super";
declare const _default: (new () => CallStack_Super & Object & import("frank-native-core/dist/libs/FrankClass").FrankClass<CallStack_Super, Object>) & import("frank-native-core/dist/libs/FrankClass").FrankClassClass<CallStack_Super, Object> & {
    currentStack: () => CallStack_Super | null;
};
export = _default;
