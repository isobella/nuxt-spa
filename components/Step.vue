<template>
    <span :class="{ active, playing }">{{index + 1}}</span>
</template>

<style>
  .active {
    color: var(--v-primary-base);
  }
  .playing {
    border: 1px solid red;
  }
</style>

<script>
  export default {
    name: "Step",
    props: {
      index: {
        type: Number,
        required: true
      },
      active: {
        type: Number,
        required: true
      },
      playing: {
        type: Boolean,
        required: true
      }
    }
  }
</script>