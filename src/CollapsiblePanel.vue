<script>
import IconArrow from './IconArrow.vue';

export default {
  name: 'CollapsiblePanel',
  props: {
    isExpanded: {
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
  components: {
    IconArrow,
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
        v-on:click="$emit('onToggle', isExpanded)"
      >
        <IconArrow
          color="#333"
          class="collapsible-panel__arrow"
          :class="{ 'collapsible-panel__arrow--expanded': isExpanded }"
        />

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

  .collapsible-panel__arrow {
    max-height: 1rem;
    max-width: 1rem;
    margin-right: 0.5rem;
    transform: rotate(-90deg);
    transition: transform .33s ease-out;
  }

  .collapsible-panel__arrow--expanded {
    transform: rotate(0deg);
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
    align-items: center;
    background-color: transparent;
    border: none;
    color: #666;
    cursor: pointer;
    display: flex;
    margin: 0;
    padding: 0.3rem 0;
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
