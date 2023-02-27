// 一些ts工具

// 获取组件类型
export type PickProps<T> = T extends (props: infer P1) => any
  ? P1
  : T extends React.ComponentClass<infer P2>
  ? P2
  : unknown;
