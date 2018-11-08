import IMainContainer from './i-main-container'
import IDepartmentTree from './i-department-tree'
import ICommonTree from './i-common-tree'

const components = [
    IMainContainer,
    IDepartmentTree,
    ICommonTree
];

const install = Vue => {
    components.forEach(Component => {
        Vue.use(Component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    IMainContainer,
    IDepartmentTree,
    ICommonTree
};

export default {
    install
};
