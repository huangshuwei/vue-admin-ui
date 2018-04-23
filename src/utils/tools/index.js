/**
 * @desc webpack打包入口文件
 * @example 自动引入子目录下所有js文件
 */
let moduleExports = {}, childModules = [];

const r = require.context('./', true, /^\.\/.+\/.+\.js$/);
r.keys().forEach(key => {

    let childModule = key.split('/')[1];

    let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));

    if (childModules.indexOf(childModule) === -1) {

        childModules.push(childModule);

        moduleExports[childModule] = {};
    }

    moduleExports[childModule][attr] = r(key);
});

module.exports = moduleExports;