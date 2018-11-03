<script>
export default {
  name: 'CollapsiblePanel',
  props: {
    initExpanded: {
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
  beforeMount() {
    this.isExpanded = this.initExpanded;
  },
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
      this.$emit('onToggle', {
        isExpanded: this.isExpanded,
      });
    }
  }
};
</script>
<template>
  <div class="collapsible-panel">
    <div class="collapsible-panel__header">
      <div
        class="collapsible-panel__triangle"
        :class="{ 'collapsible-panel__triangle--expanded': isExpanded }"
      ></div>
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
          :aria-hidden="!isExpanded"
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
    align-items: center;
    border-bottom: 1px solid #DFDFDF;
    color: #333;
    display: flex;
    padding: 0.3rem;
  }

  .collapsible-panel__headline {
    background-color: transparent;
    border: none;
    padding: 0.3rem 0;
    margin: 0;
  }

  .collapsible-panel__triangle {
    border-color: transparent transparent transparent #333;
    border-style: solid;
    border-width: 0.3rem 0 0.3rem 0.6rem;
    margin-right: 0.3rem;
    transform: rotate(360deg);
    transition: transform .33s ease-out;
  }

  .collapsible-panel__triangle--expanded {
    transform: rotate(450deg);
  }

  .fade-bottom-enter-active, .fade-bottom-leave-active {
    transition: transform .33s  ease-out;
    height: auto;
    transform: scaleY(1);
    transform-origin: bottom;
  }

  .fade-bottom-enter, .fade-bottom-leave-to {
    transform: scaleY(0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: transform .33s  ease-out;
    height: auto;
    transform: scaleY(1);
    transform-origin: top;
  }

  .fade-enter, .fade-leave-to  {
    transform: scaleY(0);
  }
</style>
