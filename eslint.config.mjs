import nextVitals from 'eslint-config-next/core-web-vitals'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'

const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', '.turbo/**', 'dist/**', 'public/**']
  },
  ...nextVitals,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'react-refresh': reactRefresh
    },
    rules: {
      'react/no-unknown-property': 'off',
      'react-refresh/only-export-components': [
        'off',
        { allowConstantExport: true }
      ],
      'react/jsx-no-target-blank': ['error', { allowReferrer: false }],
      'react/prop-types': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'react-hooks/set-state-in-effect': 'off'
    }
  }
]

export default config
