<template>
  <li
    :class="{
      step: true,
      active,
      playing,
      hihat,
      clap,
      cowbell,
      kick,
      ride,
      rim,
      snare
    }">
    </li>
</template>

<style>
  .step {
    background-color: var(--v-inactiveColor-base);
    flex: 1 0 0;
    height: 50px;
    border-left: 1px solid var(--v-inactiveColor-darken1);
    border-bottom: 1px solid var(--v-inactiveColor-darken1);
    border-top: 1px solid var(--v-inactiveColor-darken1);
  }
  .playing {
    background-color: var(--v-inactiveColor-lighten1);
    border-color: var(--v-inactiveColor-base);
  }

  .active.clap {
    box-shadow: inset 0px 0px 5px var(--v-clapColor-darken1);
    background-color: var(--v-clapColor-base);
    border-left-color: var(--v-clapColor-darken1);
    border-bottom-color: var(--v-clapColor-darken1);
    border-top-color: var(--v-clapColor-darken1);
  }
  .playing.active.clap {
    background-color: var(--v-clapColor-lighten2);
    border-color: var(--v-clapColor-base);
  }

  .active.cowbell {
    box-shadow: inset 0px 0px 5px var(--v-cowbellColor-darken1);
    background-color: var(--v-cowbellColor-base);
    border-left-color: var(--v-cowbellColor-darken1);
    border-bottom-color: var(--v-cowbellColor-darken1);
    border-top-color: var(--v-cowbellColor-darken1);
  }
  .playing.active.cowbell {
    background-color: var(--v-cowbellColor-lighten2);
    border-color: var(--v-cowbellColor-base);
  }

  .active.hihat {
    box-shadow: inset 0px 0px 5px var(--v-hihatColor-darken1);
    background-color: var(--v-hihatColor-base);
    border-left-color: var(--v-hihatColor-darken1);
    border-bottom-color: var(--v-hihatColor-darken1);
    border-top-color: var(--v-hihatColor-darken1);
  }
  .playing.active.hihat {
    background-color: var(--v-hihatColor-lighten2);
    border-color: var(--v-hihatColor-base);
  }

  .active.kick {
    box-shadow: inset 0px 0px 5px var(--v-kickColor-darken1);
    background-color: var(--v-kickColor-base);
    border-left-color: var(--v-kickColor-darken1);
    border-bottom-color: var(--v-kickColor-darken1);
    border-top-color: var(--v-kickColor-darken1);
  }
  .playing.active.kick {
    background-color: var(--v-kickColor-lighten2);
    border-color: var(--v-kickColor-base);
  }

  .active.ride {
    box-shadow: inset 0px 0px 5px var(--v-rideColor-darken1);
    background-color: var(--v-rideColor-base);
    border-left-color: var(--v-rideColor-darken1);
    border-bottom-color: var(--v-rideColor-darken1);
    border-top-color: var(--v-rideColor-darken1);
  }
  .playing.active.ride {
    background-color: var(--v-rideColor-lighten2);
    border-color: var(--v-rideColor-base);
  }

  .active.rim {
    box-shadow: inset 0px 0px 5px var(--v-rimColor-darken1);
    background-color: var(--v-rimColor-base);
    border-left-color: var(--v-rimColor-darken1);
    border-bottom-color: var(--v-rimColor-darken1);
    border-top-color: var(--v-rimColor-darken1);
  }
  .playing.active.rim {
    background-color: var(--v-rimColor-lighten2);
    border-color: var(--v-rimColor-base);
  }

  .active.snare {
    box-shadow: inset 0px 0px 5px var(--v-snareColor-darken1);
    background-color: var(--v-snareColor-base);
    border-left-color: var(--v-snareColor-darken1);
    border-bottom-color: var(--v-snareColor-darken1);
    border-top-color: var(--v-snareColor-darken1);
  }
  .playing.active.snare {
    background-color: var(--v-snareColor-lighten2);
    border-color: var(--v-snareColor-base);
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
      },
      hihat: {
        type: Boolean,
        required: true
      },
      clap: {
        type: Boolean,
        required: true
      },
      cowbell: {
        type: Boolean,
        required: true
      },
      kick: {
        type: Boolean,
        required: true
      },
      ride: {
        type: Boolean,
        required: true
      },
      rim: {
        type: Boolean,
        required: true
      },
      snare: {
        type: Boolean,
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