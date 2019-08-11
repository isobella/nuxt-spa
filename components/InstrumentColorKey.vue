<template>
  <li class="colorKeyItem">
    <div :class="{
      colorKey: true,
      hihat,
      clap,
      cowbell,
      kick,
      ride,
      rim,
      snare
    }">
      {{ instrument }}
    </div>
    </li>
</template>

<style>
  .colorKeyItem {
    display: flex;
  }
  .colorKey {
    /* flex: 1 0 33%; */
    color: white;
    min-width: 100px;
    padding: 0 1rem;
  }
  .colorKey.clap {
    box-shadow: inset 0px 0px 5px var(--v-clapColor-darken1);
    background-color: var(--v-clapColor-base);
    border-left-color: var(--v-clapColor-darken1);
    border-bottom-color: var(--v-clapColor-darken1);
    border-top-color: var(--v-clapColor-darken1);
  }

  .colorKey.cowbell {
    box-shadow: inset 0px 0px 5px var(--v-cowbellColor-darken1);
    background-color: var(--v-cowbellColor-base);
    border-left-color: var(--v-cowbellColor-darken1);
    border-bottom-color: var(--v-cowbellColor-darken1);
    border-top-color: var(--v-cowbellColor-darken1);
  }

  .colorKey.hihat {
    box-shadow: inset 0px 0px 5px var(--v-hihatColor-darken1);
    background-color: var(--v-hihatColor-base);
    border-left-color: var(--v-hihatColor-darken1);
    border-bottom-color: var(--v-hihatColor-darken1);
    border-top-color: var(--v-hihatColor-darken1);
  }

  .colorKey.kick {
    box-shadow: inset 0px 0px 5px var(--v-kickColor-darken1);
    background-color: var(--v-kickColor-base);
    border-left-color: var(--v-kickColor-darken1);
    border-bottom-color: var(--v-kickColor-darken1);
    border-top-color: var(--v-kickColor-darken1);
  }

  .colorKey.ride {
    box-shadow: inset 0px 0px 5px var(--v-rideColor-darken1);
    background-color: var(--v-rideColor-base);
    border-left-color: var(--v-rideColor-darken1);
    border-bottom-color: var(--v-rideColor-darken1);
    border-top-color: var(--v-rideColor-darken1);
  }

  .colorKey.rim {
    box-shadow: inset 0px 0px 5px var(--v-rimColor-darken1);
    background-color: var(--v-rimColor-base);
    border-left-color: var(--v-rimColor-darken1);
    border-bottom-color: var(--v-rimColor-darken1);
    border-top-color: var(--v-rimColor-darken1);
  }

  .colorKey.snare {
    box-shadow: inset 0px 0px 5px var(--v-snareColor-darken1);
    background-color: var(--v-snareColor-base);
    border-left-color: var(--v-snareColor-darken1);
    border-bottom-color: var(--v-snareColor-darken1);
    border-top-color: var(--v-snareColor-darken1);
  }

</style>

<script>
  export default {
    name: "InstrumentColorKey",
    props: {
      instrument: {
        type: String,
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