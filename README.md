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

### initial configurations

- next.config.mjs
  - webpack svg config `@svgr/webpack`
- postcss.config.mjs
  - tailwind
  - autoprefixer
- tailwind.config.ts

- good idea for browser extension helper
  - opacity bg for different viewport
  - dragging marker to compare view with design

## Header Section

- [09:44](https://www.youtube.com/watch?v=ELssXP1sTC8&t=584s)  

- font setup
  - layout.tsx
  - tailwind.config.ts
  - `antialiased` for better fonts
- customized className in global css

## Hero Section

- [24:21](https://www.youtube.com/watch?v=ELssXP1sTC8&t=1461s)  

- overflow-x-clip
  - get rid of scroll-x ?
- mask-image

```bash
git config --global http.postBuffer 157286400
```

## Featured Projects Section

- [1:17:47](https://www.youtube.com/watch?v=ELssXP1sTC8&t=4667s) 

- text with gradient color
  - inline
  - transparent text
  - bg gradient
- before / after
- style background image

## Tape Section

- [2:03:12](https://www.youtube.com/watch?v=ELssXP1sTC8&t=7392s) 

- no horizontal scroll
  - overflow-x-clip
- mask image

## Testimonials Section

- [2:15:41](https://www.youtube.com/watch?v=ELssXP1sTC8&t=8141s) 

- SectionHeader
- Card

## About Section

- [2:46:31](https://www.youtube.com/watch?v=ELssXP1sTC8&t=9991s) 

- Card and CardHeader
- TechIcon(SVG) and ToolboxItem

## Contact Section

- [3:54:48](https://www.youtube.com/watch?v=ELssXP1sTC8&t=14088s) 

## Footer Section (part 5)

- [4:09:06](https://www.youtube.com/watch?v=ELssXP1sTC8&t=14946s) 