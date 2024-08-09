// * 一些通用any类型定义，通常用于没有类型的第三方库，不要滥用any

// 任意值
type Any = any;
// 任意数组类型
type AnyArray<T = any> = T[];
// 任意对象类型
type AnyObject<T = any> = Record<string | number, T>;
// 任意函数类型
type AnyFunction<T = any> = (...args: T[]) => any;