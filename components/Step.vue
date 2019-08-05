<template>
  <li
    :style="transitionDelayStyle"
    :class="{ step: true, active, playing }">
    </li>
</template>

<style>
  .step {
    background-color: var(--v-primary-base);
    margin: 0 0.25rem;
    flex: 1 0 0;
    height: 50px;
    transition-property: background-color;
  }
  .step:first-child {
    margin-left: 0
  }
  .step:last-child {
    margin-right: 0
  }
  .active {
    background-color: var(--v-accent-base);
  }
  .playing {
    background-color: var(--v-accent-darken2);
  }
</style>

<script>
  export default {
    name: "Step",
    props: {
      stepNumber: {
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
      },
      beatsPerMinute: {
        type: Number,
        required: true
      }
    },
    computed: {
      transitionDelayStyle: function () {
        const duration = 60 / this.beatsPerMinute

        return `transition-duration: ${duration}s;`
      }
    }
  }
</script>