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
    position: relative;
    overflow: hidden;
  }
  .step:after {
    content: '';
    max-width: 150%;
    max-height: 150%;
    width: 0px;
    height: 0px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%; 
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate3d(-50%, -50%, 0);
  }
  .playing {
    background-color: var(--v-inactiveColor-lighten1);
    border-color: var(--v-inactiveColor-base);
  }

  .step.active.playing:after {
    animation-name: example;
    animation-duration: var(--beat-animation-duration);
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .active.clap {
    box-shadow: inset 0px 0px 5px var(--v-clapColor-darken1);
    background-color: var(--v-clapColor-base);
    border-left-color: var(--v-clapColor-darken1);
    border-bottom-color: var(--v-clapColor-darken1);
    border-top-color: var(--v-clapColor-darken1);
  }
  .active.clap:after {
    background-color: var(--v-clapColor-lighten2);
  }

  .active.cowbell {
    box-shadow: inset 0px 0px 5px var(--v-cowbellColor-darken1);
    background-color: var(--v-cowbellColor-base);
    border-left-color: var(--v-cowbellColor-darken1);
    border-bottom-color: var(--v-cowbellColor-darken1);
    border-top-color: var(--v-cowbellColor-darken1);
  }
  .active.cowbell:after {
    background-color: var(--v-cowbellColor-lighten2)
  }

  .active.hihat {
    box-shadow: inset 0px 0px 5px var(--v-hihatColor-darken1);
    background-color: var(--v-hihatColor-base);
    border-left-color: var(--v-hihatColor-darken1);
    border-bottom-color: var(--v-hihatColor-darken1);
    border-top-color: var(--v-hihatColor-darken1);
  }
  .active.hihat:after {
    background-color: var(--v-hihatColor-lighten2);
  }

  .active.kick {
    box-shadow: inset 0px 0px 5px var(--v-kickColor-darken1);
    background-color: var(--v-kickColor-base);
    border-left-color: var(--v-kickColor-darken1);
    border-bottom-color: var(--v-kickColor-darken1);
    border-top-color: var(--v-kickColor-darken1);
  }
  .active.kick:after {
    background-color: var(--v-kickColor-lighten2)
  }

  .active.ride {
    box-shadow: inset 0px 0px 5px var(--v-rideColor-darken1);
    background-color: var(--v-rideColor-base);
    border-left-color: var(--v-rideColor-darken1);
    border-bottom-color: var(--v-rideColor-darken1);
    border-top-color: var(--v-rideColor-darken1);
  }
  .active.ride:after {
    background-color: var(--v-rideColor-lighten2);
  }

  .active.rim {
    box-shadow: inset 0px 0px 5px var(--v-rimColor-darken1);
    background-color: var(--v-rimColor-base);
    border-left-color: var(--v-rimColor-darken1);
    border-bottom-color: var(--v-rimColor-darken1);
    border-top-color: var(--v-rimColor-darken1);
  }
  .active.rim:after {
    background-color: var(--v-rimColor-lighten2);
  }

  .active.snare {
    box-shadow: inset 0px 0px 5px var(--v-snareColor-darken1);
    background-color: var(--v-snareColor-base);
    border-left-color: var(--v-snareColor-darken1);
    border-bottom-color: var(--v-snareColor-darken1);
    border-top-color: var(--v-snareColor-darken1);
  }
  .active.snare:after {
    background-color: var(--v-snareColor-lighten2);
  }

@keyframes example {
  0% {width: 0px; height: 0px;}
  100% {width: 110px; height: 110px;}
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
    }
  }
</script>