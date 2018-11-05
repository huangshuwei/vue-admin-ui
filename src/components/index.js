import IMainContainer from './i-main-container'

const components = [
    IMainContainer
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
    IMainContainer
};

export default {
    install
};
