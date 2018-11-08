import ICommonTree from './src/common-tree';

ICommonTree.install = function(Vue) {
    Vue.component(ICommonTree.name, ICommonTree);
};

export default ICommonTree;