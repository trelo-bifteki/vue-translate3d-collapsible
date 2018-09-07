<script>
export default {
  name: 'CollapsiblePanel',
  props: {
    expanded: {
      type: Boolean,
      default: false,
    }
  },
};
</script>
<template>
  <div class="collapsible-panel">
    <div class="collapsible-panel__header">
      <button
        class="collapsible-panel__headline"
        :aria-expanded="expanded"
        aria-controls="collapsible-0"
      >
        <slot name="header"></slot>
      </button>
    </div>
    <div v-if="expanded">
      <slot/>
    </div>
  </div>
</template>

<style>
  .collapsible-panel {
  }
</style>
