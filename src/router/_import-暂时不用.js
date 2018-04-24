/*
* 没有解决 chunk name 传参的问题
* */

module.exports = (filePath, fileName) => r => require.ensure([], () => r(require(`@/${filePath}.vue`)), fileName);
