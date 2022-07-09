# nathanv.me

My portfolio website

## Cloning

```bash
git clone https://github.com/NathanVaughn/nathanv.me.git
npm install
```

## npm scripts

### build:css

Polyfills and minifies CSS with `postcss`.

### build:js

Minifies JS with `uglifyjs`.

### build

This script:

1. Runs `build:js` and `build:css`
2. Runs `hugo` to generate the site
3. Runs `parcel build` to process the HTML
4. Runs `postprocess.js` to make duplicates of filenames without the hashes

### lint:css

Lints CSS with `stylelint`.

### lint:html

Lints HTML with `htmlhint`.

### lint:js

Lints JS with `jshint`.

### server

Starts a server to preview the built site.
