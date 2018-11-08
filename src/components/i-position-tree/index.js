import IPositionTree from './src/position-tree';

IPositionTree.install = function(Vue) {
    Vue.component(IPositionTree.name, IPositionTree);
};

export default IPositionTree;