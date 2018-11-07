# vue-translate3d-collapsible

## About

This is a simple collapsible pattern inspired by the collapsibles used
in Bitbucket.

It includes the following features:
- ARIA specifications
- CSS3 animations (translate3d) that needs *no javascript hacks*

## install

Install the package first:

```
npm install vue-translate3d-collapsible
```
Then import it into your component

```
<script>
import { CollapsiblePanel } from 'vue-translate3d-collapsible'

export default {
  components: {
    CollapsiblePanel
  }
}
</script>
```

Add the layout styles in your application
```
<style>

@import "../node_modules/vue-translate3d-collapsible/dist/vue-translated3d-collapsible.css"

</style>
```
## Why translate3d animations?

This is an animation that requires no *hacks* for setting the height of the panel in
javascript. The animation is also done only in CSS and therefore is fast.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
