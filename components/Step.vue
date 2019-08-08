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
    transition-property: box-shadow;
    box-shadow: 0px 0px 2px 0px var(--v-primary-base);
    border: 2px solid var(--v-primary-base);
  }
  .step:first-child {
    margin-left: 0
  }
  .step:last-child {
    margin-right: 0
  }
  .active {
    /* box-shadow: 0px 0px 5px 0px var(--v-accent-darken1); */
    background-color: var(--v-accent-base);
    animation: pulse 2s infinite;
    border-color: var(--v-accent-base);
  }
  .playing {
    background-color: var(--v-primary-darken1);
    border-color: var(--v-primary-darken2);
    /* box-shadow: 0px 0px 10px 0px var(--v-primary-base); */
  }
  .playing.active {
    background-color: var(--v-accent-darken1);
    border-color: var(--v-accent-darken1);
    /* box-shadow: 0px 0px 10px 0px var(--v-accent-base); */
  }

  @keyframes pulse {
    0% {
      box-shadow: 0px 0px 5px 0px var(--v-accent-base);
      /* background-color: var(--v-accent-base); */
    }
    50% {
      box-shadow: 0px 0px 10px 0px var(--v-accent-base);
      /* background-color: var(--v-accent-darken1); */
    }
    100% {
      box-shadow: 0px 0px 5px 0px var(--v-accent-base);
      /* background-color: var(--v-accent-base); */
    }
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