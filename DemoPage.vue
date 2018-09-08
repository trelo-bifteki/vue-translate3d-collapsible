<script>
  import { CollapsiblePanel } from './src';

  export default {
    name: `DemoPage`,
    components: {
      CollapsiblePanel,
    }
  }
</script>
<template>
<div class="example">
  <h1>Collapsible panel demo</h1>
  <CollapsiblePanel  class="example-2" :expanded="true">
    <div slot="header">Hello there</div>
    <div slot="actions"><button>Hello</button></div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
     mollit anim id est laborum.
  </CollapsiblePanel>
</div>
</template>

<style>
  .example-2 {
    max-width: 40rem;
  }
</style>
