<template>
    <span :class="{ active, playing }">step {{index + 1}}</span>
</template>

<style>
  .active {
    color: red;
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