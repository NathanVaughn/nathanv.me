# nathanv.me
[![Build Status](https://github.com/NathanVaughn/nathanv.me/workflows/Build/badge.svg)](https://github.com/NathanVaughn/nathanv.me/actions?workflow=Build)

My portfolio website

## Cloning

```bash
git clone https://github.com/NathanVaughn/nathanv.me.git
npm install
```

## npm scripts

### beautify

Beautifies output HTML (`public\index.html`).

### build:css

Polyfills and minifies CSS with `postcss`.

### build:js

Minifies JS with `uglifyjs`.

### build

This script:
1. Runs `build:js` and `build:css`
2. Runs `hugo` to generate the site
3. Runs `beautify` to beautify the output HTML
4. Removes the `public/assets/icons` folder as all SVG icons are inlined

### critical

Visits `http://localhost:1313` to generate the critical CSS. `hugo serve` is automatically stopped and started.

### lint:css

Lints CSS with `stylelint`.

### lint:html

Lints HTML with `htmlhint`.

### lint:js

Lints JS with `jshint`.

### minify

Minifies output HTML (`public\index.html`).

### server

Starts a `hugo` server.

### svgmin

Minifies all SVG files that the theme uses.
