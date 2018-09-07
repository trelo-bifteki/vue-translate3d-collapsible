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
  <CollapsiblePanel>
    This is not visible
  </CollapsiblePanel>
  <CollapsiblePanel :expanded="true">
    <div slot="header">Hello there</div>
    This is visible
  </CollapsiblePanel>
</div>
</template>
