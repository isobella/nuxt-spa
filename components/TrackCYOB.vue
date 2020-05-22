<template>
  <div class="trackContainer">
      <v-select
        :items="instruments"
        label="Select instrument"
        :value="instrument"
        :disabled="playing"
        outlined
        hide-details
      ></v-select>
    <ul class="stepsList">
      <Step
        v-for="(step, index) in steps" :key="index"
        :stepNumber="index + 1"
        :active="step"
        :playing="index === currentStep"
        :clap="instrument === 'clap'"
        :cowbell="instrument === 'cowbell'"
        :hihat="instrument === 'hihat'"
        :kick="instrument === 'kick'"
        :ride="instrument === 'ride'"
        :rim="instrument === 'rim'"
        :snare="instrument === 'snare'"
      />
    </ul>
  </div>
</template>

<style>
  .trackContainer {
    margin-bottom: 2rem;
  }
  .stepsList {
    list-style-type: none;
    padding-left: 0 !important;
    display: flex;
    justify-content: space-between;
  }
</style>

<script>
import Step from '~/components/Step.vue'
  export default {
    name: "Track",
    components: {
      Step
    },
    props: {
      instrument: {
        type: String,
        required: true
      },
      steps: {
        type: Array,
        required: true
      },
      currentStep: {
        type: Number,
        required: true
      },
      playing: {
        type: Boolean,
        required: true
      }
    },
    data: () => {
      return {
        instruments: [
          'clap', 'cowbell', 'hihat', 'kick', 'ride', 'rim', 'snare'
        ]
      }
    }
  }
</script>