module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
  ],
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  }

}
