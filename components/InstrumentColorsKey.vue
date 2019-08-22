<template>
  <v-card class="instumentsCard">
    <v-card-title class="titleContainer grey lighten-3">
      <h2 class="subtitle-1">Instrument colours key:</h2>
      <p class="caption noteText">Tap to select new colors</p>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-lg class="fill-width">
        <v-layout wrap>
          <InstrumentColorPickerButton
            v-for="(instrument, index) in instruments" :key="index"
            :instrument="instrument"
            :clap="instrument === 'clap'"
            :cowbell="instrument === 'cowbell'"
            :hihat="instrument === 'hihat'"
            :kick="instrument === 'kick'"
            :ride="instrument === 'ride'"
            :rim="instrument === 'rim'"
            :snare="instrument === 'snare'"
          />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped>
  .titleContainer {
    display: block;
    text-align: left;
    padding: 0.5rem 1rem;
  }
  .noteText {
    margin-bottom: 0;
  }
  .instumentsCard {
    margin-top: 1rem;
  }
</style>

<script>
import InstrumentColorPickerButton from '~/components/InstrumentColorPickerButton.vue'
  export default {
    name: "InstrumentColorsKey",
    components: {
      InstrumentColorPickerButton
    },
    props: {
      instruments: {
        type: Array,
        required: true
      }
    }
  }
</script>