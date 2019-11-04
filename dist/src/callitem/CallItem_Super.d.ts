export declare class CallItem_Super {
    variKey: (o?: string) => this & string;
    methodCall: (o?: (...args: any) => any) => this & ((...args: any) => any);
    paramsCall: (o?: () => Array<any>) => this & (() => Array<any>);
    next: (o?: this) => this;
    loopCall: (o?: () => boolean) => this & (() => boolean);
    loopFrom: (o?: () => this) => this & (() => this);
}
