<script>
export default {
  name: 'CollapsiblePanel',
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    transitionBody: {
      type: String,
      default: 'fade',
    },
    transitionHeader: {
      type: String,
      default: 'fade-bottom',
    }
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>
<template>
  <div class="collapsible-panel">
    <div class="collapsible-panel__header">
      <button
        class="collapsible-panel__headline"
        :aria-expanded="isExpanded"
        aria-controls="collapsible-0"
        v-on:click="toggle"
      >
        <slot name="header"></slot>
      </button>
      <transition :name="transitionHeader">
        <div
          class="collapsible-panel__actions"
          v-if="isExpanded"
        >
          <slot name="actions"></slot>
        </div>
      </transition>
    </div>
    <transition :name="transitionBody">
      <div
        id="collapsible-0"
        :aria-hidden="!isExpanded"
        class="collapsible-panel__container"
        v-if="isExpanded"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<style>
  .collapsible-panel {
  }

  .collapsible-panel__actions {
    flex-grow: 1;
    text-align: right;
  }

  .collapsible-panel__container {
    margin: 0;
    padding: 0.3rem;
  }

  .collapsible-panel__header {
    border-bottom: 1px solid #666;
    display: flex;
    padding: 0.3rem;
  }

  .collapsible-panel__headline {
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }

  .fade-bottom-enter-active, .fade-bottom-leave-active {
    transition: transform .33s  ease-out;
    height: auto;
    transform: scaleY(1);
    transform-origin: bottom;
  }

  .fade-bottom-enter, .fade-bottom-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: scaleY(0);
  }


  .fade-enter-active, .fade-leave-active {
    transition: transform .33s  ease-out;
    height: auto;
    transform: scaleY(1);
    transform-origin: top;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: scaleY(0);
  }
</style>
