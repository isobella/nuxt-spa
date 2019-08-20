<template>
    <v-container grid-list-lg class="fill-width">
      <v-layout wrap>
        <InstrumentColorPicker
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
import InstrumentColorPicker from '~/components/InstrumentColorPicker.vue'
  export default {
    name: "InstrumentColorsKey",
    components: {
      InstrumentColorPicker
    },
    props: {
      instruments: {
        type: Array,
        required: true
      }
    }
  }
</script>