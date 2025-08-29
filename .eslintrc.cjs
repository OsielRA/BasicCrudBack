module.exports = {
  root: true,
  extends: ['./node_modules/ts-standard/eslintrc.json'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    // 1) Permite inferencia en funciones inline/expresiones (arrow functions en controladores, etc.)
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true
    }],

    // 2) (opcional) Relajar strict-boolean-expressions para objetos/undefined
    //    Puedes ajustar estos flags según tus preferencias
    '@typescript-eslint/strict-boolean-expressions': ['error', {
      allowNullableObject: true,
      allowNullableBoolean: true,
      allowNullableString: true,
      allowNullableNumber: true
    }]
  },
};