import IMainContainer from './src/main-container';

IMainContainer.install = function(Vue) {
    Vue.component(IMainContainer.name, IMainContainer);
};

export default IMainContainer;