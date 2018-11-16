<template>
  <svg
    :height="height"
    :width="width"
    viewBox="0 0 1792 1792"
  >
    <path
      d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
      :fill="color"
    />
  </svg>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#333',
    },
    height: {
      type: String,
      default: '100%',
    },
    width: {
      type: String,
      default: '100%',
    }
  }
}
</script>
