// * 一些通用any类型定义，通常用于没有类型的第三方库，不要滥用any

// 任意值
type Any = any;
// 任意数组类型
type AnyArray = any[];
// 任意对象类型
type AnyObject = Record<string, any>;
// 任意函数类型
type AnyFunction = (...args: any[]) => any;
