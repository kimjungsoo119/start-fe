module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
    
    parserOptions: {
      ecmaVersion: 20,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-var': 'warn',
      
    },
  };