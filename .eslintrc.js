module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "rules": {
    // possible errors
    "no-console": ["off"],

    // best practices
    "array-callback-return": ["error"],
    "block-scoped-var": ["error"],
    "consistent-return": ["error"],
    "default-case": ["error"],
    "dot-notation": ["error"],
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "no-eval": ["error"],
    "no-implied-eval": ["error"],
    "no-loop-func": ["error"],
    "no-multi-spaces": ["error", { "exceptions": { "Property": true, "VariableDeclarator": true } }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],

    // stylistic
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs"],
    "camelcase": ["error", { "properties": "always" }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "indent": ["error", 2, { "SwitchCase": 1, "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["error", { "max": 3, "maxEOF": 1 }],
    "no-tabs": ["error"],
    "no-trailing-spaces": ["error"],
    "no-unneeded-ternary": ["error"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "spaced-comment": ["error", "always"]
  }
};
