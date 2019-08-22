<template>
  <v-flex xs6 sm3 md2>
    <v-btn
      v-on:click="openColorPicker"
      outlined
      block
      large
      elevation="1"
      class="colorPickerButton"
    >
      <span :class="{
        colorKey: true,
        hihat,
        clap,
        cowbell,
        kick,
        ride,
        rim,
        snare
      }" />
      <span class="colorPickerButtonText">
      = {{ instrument }}
      </span>
    </v-btn>
  </v-flex>
</template>

<style>
  .colorPickerButton {
    padding-left: 0 !important;
    justify-content: space-between;
  }
  .colorPickerButtonText {
    flex: 1 0 auto;
  }
  .colorKey {
    flex: 0 0 44px;
    height: 42px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-right: 0.5rem;
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
    // use a dialog
  export default {
    name: "InstrumentColorPickerButton",
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
    },
    methods: {
      openColorPicker: function () {
        this.$store.commit('colorPicker/open', { open: true, instrument: this.instrument })
      }
    }
  }
</script>