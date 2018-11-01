<script>
  import CollapsiblePanel from './src';

  export default {
    name: `DemoPage`,
    components: {
      CollapsiblePanel,
    },
    data() {
      return {
        isExpanded: false,
      };
    },
    methods: {
      handleToggle({ isExpanded }) {
        this.isExpanded = isExpanded;
      },
    },
  };
</script>
<template>
<div class="example">
  <h1>Collapsible panel demo</h1>
  <h2>Expanded? {{ this.isExpanded }}</h2>
  <CollapsiblePanel
     class="example-2"
      :initExpanded="isExpanded"
      @onToggle="handleToggle"
   >
    <div slot="header">Howdy stranger</div>
    <div slot="actions"><a href="#">rate me</a></div>
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
