<template>
  <div class="trackContainer">
    <h2>{{ instrument }}</h2>
    <ul>
      <Step
        v-for="(step, index) in steps" :key="index"
        :stepNumber="index + 1"
        :active="step"
        :playing="index === currentStep"
        :beatsPerMinute="beatsPerMinute"
      />
    </ul>
  </div>
</template>

<style>
  ul {
    list-style-type: none;
    padding-left: 0 !important;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
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