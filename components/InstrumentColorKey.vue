<template>
  <li class="colorKeyListItem">
    <div class="colorKeyContainer">
      <div :class="{
        colorKey: true,
        hihat,
        clap,
        cowbell,
        kick,
        ride,
        rim,
        snare
      }" />
      <div class="instrumentText">= {{ instrument }}</div>
    </div>
  </li>
</template>

<style>
  .colorKeyListItem {
    margin: 1rem;
    border: 2px solid var(--v-primary-base);
  }

  .colorKeyListItem:nth-child(odd) {
    margin-left: 0;
  }
  .colorKeyListItem:nth-child(even) {
    margin-right: 0;
  }

  @media (min-width: 960px) {
    .colorKeyListItem:first-child, .colorKeyListItem:nth-child(5) {
      margin-left: 0 !important;
    }
    .colorKeyListItem:nth-child(odd) {
      margin-left: 1rem;
    }
    .colorKeyListItem:nth-child(even) {
      margin-right: 1rem;
    }
    .colorKeyListItem:nth-child(4) {
      margin-right: 0;
    }
  }

  .colorKeyContainer {
    display: flex;
    align-items: center;
  }
  .colorKey {
    width: 50px;
    height: 50px;
    margin-right: 0.5rem;
  }
  .instrumentText {
    text-transform: capitalize;
  }
  .colorKey.clap {
    box-shadow: inset 0px 0px 5px var(--v-clapColor-darken1);
    background-color: var(--v-clapColor-base);
    border: 1px solid var(--v-clapColor-darken1);
  }

  .colorKey.cowbell {
    box-shadow: inset 0px 0px 5px var(--v-cowbellColor-darken1);
    background-color: var(--v-cowbellColor-base);
    border: 1px solid var(--v-cowbellColor-darken1);
  }

  .colorKey.hihat {
    box-shadow: inset 0px 0px 5px var(--v-hihatColor-darken1);
    background-color: var(--v-hihatColor-base);
    border: 1px solid var(--v-hihatColor-darken1);
  }

  .colorKey.kick {
    box-shadow: inset 0px 0px 5px var(--v-kickColor-darken1);
    background-color: var(--v-kickColor-base);
    border: 1px solid var(--v-kickColor-darken1);
  }

  .colorKey.ride {
    box-shadow: inset 0px 0px 5px var(--v-rideColor-darken1);
    background-color: var(--v-rideColor-base);
    border: 1px solid var(--v-rideColor-darken1);
  }

  .colorKey.rim {
    box-shadow: inset 0px 0px 5px var(--v-rimColor-darken1);
    background-color: var(--v-rimColor-base);
    border: 1px solid var(--v-rimColor-darken1);
  }

  .colorKey.snare {
    box-shadow: inset 0px 0px 5px var(--v-snareColor-darken1);
    background-color: var(--v-snareColor-base);
    border: 1px solid var(--v-snareColor-darken1);
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