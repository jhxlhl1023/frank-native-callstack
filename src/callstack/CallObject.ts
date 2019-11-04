export interface CallObject {
    variKey: string,
    methodCall: (...args: any) => void,
    paramsCall: () => Array<any>
};