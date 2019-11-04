export declare function getter_setter(): (this: any, obj?: any) => any;
/**
 * abstract method
 */
export declare function abstract4override(): void;
/**
 * 抛出自定义异常
 */
export declare function error(msg?: string): void;
/**
 * 获取超类的方法
 */
export declare function findSuperMethod(thisObj: any, methodName: string): any;
/**
 * 获取相对方法的超类
 */
export declare function findSuper(thisObj: any, methodName: string): any;
