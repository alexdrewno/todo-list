module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        /**
         * Warning
         */
        // Extends
        'no-case-declarations': 'warn',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-extra-boolean-cast': 'warn',
        'no-extra-semi': 'warn',
        'no-process-exit': 'warn',
        'no-prototype-builtins': 'warn',
        'no-useless-escape': 'warn',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
}
