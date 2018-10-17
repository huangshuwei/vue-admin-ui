module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        "plugin:vue/recommended",
        'eslint:recommended'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        // plugin:vue/recommended 规则
        'vue/attributes-order': 'error',
        'vue/html-quotes': [
            'error',
            'double'
        ],
        // plugin:vue/strongly-recommended 规则
        'vue/attribute-hyphenation': [
            'error',
            'always'
        ],
        'vue/html-end-tags': 'error',
        'vue/html-indent': [
            'error',
            'tab'
        ],
        'vue/require-default-prop': 'error',
        'vue/require-prop-types': 'error',
        'vue/order-in-components': ["error", { // methods 顺序和 官网推荐稍有不同
            "order": [
                "el",
                "name",
                "parent",
                "functional",
                ["delimiters", "comments"],
                ["components", "directives", "filters"],
                "extends",
                "mixins",
                "inheritAttrs",
                "model",
                ["props", "propsData"],
                "data",
                "computed",
                "watch",
                "methods",
                "LIFECYCLE_HOOKS",
                ["template", "render"],
                "renderError"
            ]
        }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}