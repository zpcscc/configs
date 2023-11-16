// * 一些通用any类型定义

// 任意函数类型
type AnyFunction = (...args: any[]) => any;
// 任意对象类型
type AnyObject = Record<string, any>;
