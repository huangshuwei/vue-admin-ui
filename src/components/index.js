import IMainContainer from './i-main-container'
import IDepartmentTree from './i-department-tree'

const components = [
    IMainContainer,
    IDepartmentTree
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
    IDepartmentTree
};

export default {
    install
};
