# Portfolio

## Introduction

- [00:00](https://www.youtube.com/watch?v=ELssXP1sTC8&t=0s)

## Initial Setup

- [02:38](https://www.youtube.com/watch?v=ELssXP1sTC8&t=158s)

```bash
pnpm i

pnpm add -D prettier prettier-plugin-tailwindcss eslint-config-prettier
```

- configuration files
  - .prettierrc
  - .eslintrc.json

```json
// .prettierrc
{
  "trailingComma": "all",
  "printWidth": 100,
  "singleQuote": true,
  "semi": false,
  "tabWidth": 2,
  "useTabs": false,
  "jsxSingleQuote": true,
  "arrowParens": "always",
  "plugins": ["prettier-plugin-tailwindcss"]
}

// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "next/typescript", "prettier"]
}
```