<template>
    <ul class="colorKeyList">
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
    </ul>
</template>

<style>
  .colorKeyList {
    list-style-type: none;
    padding-left: 0 !important;
    display: grid;
    grid-template-columns: 50% 50%;
  }
  @media (min-width: 960px) {
    .colorKeyList {
      grid-template-columns: 25% 25% 25% 25%;
    }
  }
</style>

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