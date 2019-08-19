module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'eslint-config-basic',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
		'@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{allowExpressions: true}
		],
        'new-cap': [
            'error',
			{capIsNewExceptions: ['Injectable', 'Inject', 'Param', 'Server', 'Controller', 'Get', 'Post', 'Delete', 'Priority', 'Midware']}
        ]
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};