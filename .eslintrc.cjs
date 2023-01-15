module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: [
    // 'eslint:recommended',
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'plugin:prettier/recommended',
  ],

  plugins: ['vue'],
  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
    'no-console': ['warn'],
    'no-unused-vars': 'warn',
  },
}
