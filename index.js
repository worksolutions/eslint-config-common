module.exports = function (tsConfigPaths) {
	return {
		"parser": "@typescript-eslint/parser",
		"plugins": [
			"@typescript-eslint",
			"eslint-plugin-sonarjs",
			"import",
			"unused-imports"
		],
		settings: {
			"import/parsers": {
				"@typescript-eslint/parser": [".ts", ".tsx"],
			},
			"import/resolver": {
				typescript: { project: tsConfigPaths },
				node: { project: tsConfigPaths },
			},
		},
		"extends": [
			"eslint:recommended",
			"plugin:@typescript-eslint/recommended",
			"react-app",
			"prettier",
			"plugin:import/recommended",
			"plugin:import/typescript"
		],
		"rules": {
			"max-len": [
				"error",
				{
					"code": 120,
					"ignoreStrings": true,
					"ignoreTrailingComments": true,
					"ignoreUrls": true,
					"ignoreRegExpLiterals": true
				}
			],
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"no-unused-expressions": "error",
			"no-unused-vars": "off",
			"complexity": [
				"error",
				{	"max": 15 }
			],
			"@typescript-eslint/no-unused-vars": [
				"error",
				{}
			],
			"jsx-a11y/alt-text": "off",
			"react/display-name": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
			"react/jsx-closing-bracket-location": [
				"error",
				"tag-aligned"
			],
			"react/jsx-curly-brace-presence": [
				"error",
				"never"
			],
			"react/jsx-curly-spacing": "error",
			"@typescript-eslint/no-var-requires": "off",
			"@typescript-eslint/no-empty-function": "off",
			"comma-spacing": "error",
			"no-multi-spaces": "error",
			"no-multiple-empty-lines": ["error", { max: 1 }],
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": "error",
			"import/default": "off",
			"import/no-named-as-default-member": "off",
			"import/newline-after-import": ["error", { count: 1, exactCount: true, considerComments: true }],
		}
	}
}
