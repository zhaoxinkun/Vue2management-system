module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended', // 如果不想要任何 ESLint 检查，可以注释掉这行
        'plugin:vue/essential', // 如果不想要任何 Vue 相关的 ESLint 检查，可以注释掉这行
    ],
    rules: {
        // 在这里禁用所有规则
        'no-console': 'off',
        'no-debugger': 'off'
    }
};
