<template>
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
</template>

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