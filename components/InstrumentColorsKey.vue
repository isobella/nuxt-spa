<template>
    <v-container grid-list-sm>
      <v-layout wrap>
        <InstrumentColorKey
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
import InstrumentColorKey from '~/components/InstrumentColorKey.vue'
  export default {
    name: "InstrumentColorsKey",
    components: {
      InstrumentColorKey
    },
    props: {
      instruments: {
        type: Array,
        required: true
      }
    }
  }
</script>