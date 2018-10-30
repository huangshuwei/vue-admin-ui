/*
*
reference https://github.com/William17/list-to-tree-lite/blob/master/index.js

example:
var tree = listToTree(list, {
  idKey: 'id',
  parentKey: 'parentId',
  childrenKey: 'children'
});

* */



/**
 *
 * @desc 将扁平数组转换成 tree 数组
 * @param {Array} data
 * @param {Array} options
 * @return {Array}
 */
function listToTree(data, options) {
    options = options || {};
    var ID_KEY = options.idKey || 'id';
    var PARENT_KEY = options.parentKey || 'parent';
    var CHILDREN_KEY = options.childrenKey || 'children';

    var tree = [], childrenOf = {};
    var item, id, parentId;

    for(var i = 0, length = data.length; i < length; i++) {
        item = data[i];
        id = item[ID_KEY];
        parentId = item[PARENT_KEY] || 0;
        // every item may have children
        childrenOf[id] = childrenOf[id] || [];
        // init its children
        item[CHILDREN_KEY] = childrenOf[id];
        if (parentId != 0) {
            // init its parent's children object
            childrenOf[parentId] = childrenOf[parentId] || [];
            // push it into its parent's children object
            childrenOf[parentId].push(item);
        } else {
            tree.push(item);
        }
    };

    return tree;
}

export default listToTree;