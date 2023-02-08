/**
 * @name 打包需要排除的文件external
 */
const external = ({ pakg }) => {
  const { peerDependencies = {}, dependencies = {}, devDependencies = {} } = pakg || {};
  // 这里将第三方库都排除掉，减小体积
  return [
    ...Object.keys(peerDependencies),
    ...Object.keys(dependencies),
    ...Object.keys(devDependencies),
  ];
};

export default external;
