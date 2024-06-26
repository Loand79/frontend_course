module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['airbnb', 'plugin:react/recommended', 'plugin:i18next/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'lo-and-plugin', 'unused-imports'],
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', 'ts', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'max-len': [
            1,
            {
                code: 150,
            },
        ],
        'no-unused-vars': 1,
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 1,
        'react/function-component-definition': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 0,
        'no-shadow': 0,
        'no-underscore-dangle': 'off',
        'react/display-name': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'theme',
                    'size',
                    'placeholder',
                    'target',
                    'direction',
                    'align',
                    'justify',
                    'gap',
                    'role',
                    'as',
                    'border',
                    'feature',
                    'color',
                    'variant',
                ],
            },
        ],
        'react/jsx-max-props-per-line': [1, { maximum: 3 }],
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 0,
        'no-trailing-spaces': 0,
        'no-undef': 0,
        'react/no-array-index-key': 0,
        'react/no-unstable-nested-components': 'warn',
        'lo-and-plugin/path-cheker': ['error', { alias: '@' }],
        'lo-and-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx'],
            },
        ],
        'lo-and-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'react/jsx-props-no-spreading': 'off',
                'i18next/no-literal-string': 'off',
                'max-len': 0,
            },
        },
    ],
};
