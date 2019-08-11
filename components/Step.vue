<template>
  <li
    :class="{ step: true, active, playing }">
    </li>
</template>

<style>
  .step {
    background-color: var(--v-primary-base);
    flex: 1 0 0;
    height: 50px;
    border-left: 1px solid var(--v-primary-darken1);
    border-bottom: 1px solid var(--v-primary-darken1);
    border-top: 1px solid var(--v-primary-darken1);
  }
  .active {
    box-shadow: inset 0px 0px 5px var(--v-accent-darken1);
    background-color: var(--v-accent-base);
    transition: background-color 0.2s;
    /* animation: pulse 6s infinite; */
    border-left-color: var(--v-accent-darken1);
    border-bottom-color: var(--v-accent-darken1);
    border-top-color: var(--v-accent-darken1);
  }
  .playing {
    background-color: var(--v-primary-lighten1);
    border-color: var(--v-primary-base);
  }
  .playing.active {
    background-color: var(--v-accent-lighten2);
    border-color: var(--v-accent-base);
  }

  @keyframes pulse {
    0% {
      box-shadow: inset 0px 0px 5px var(--v-accent-darken1);
    }
    50% {
      box-shadow: inset 0px 0px 100px var(--v-accent-darken1);
    }
    100% {
      box-shadow: inset 0px 0px 5px var(--v-accent-darken1);
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
        // not used now, but may want in future
        const duration = 60 / this.beatsPerMinute
        return `transition-duration: ${duration}s;`
      }
    }
  }
</script>