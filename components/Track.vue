<template>
  <div class="trackContainer">
    <!-- <h2>{{ instrument }}</h2> -->
    <ul class="stepsList">
      <Step
        v-for="(step, index) in steps" :key="index"
        :stepNumber="index + 1"
        :active="step"
        :playing="index === currentStep"
        :beatsPerMinute="beatsPerMinute"
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
  .stepsList {
    list-style-type: none;
    padding-left: 0 !important;
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 1rem; */
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
      beatsPerMinute: {
        type: Number,
        required: true
      }
    }
  }
</script>