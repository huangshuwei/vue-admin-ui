import IDepartmentTree from './src/department-tree';

IDepartmentTree.install = function(Vue) {
    Vue.component(IDepartmentTree.name, IDepartmentTree);
};

export default IDepartmentTree;