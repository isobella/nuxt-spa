<template>
  <div class="trackContainer">
    <h2>{{ instrument }}</h2>
    <ul>
      <li v-for="(step, index) in steps">
        <Step :index="index" :active="step" :playing="index === currentStep" />
      </li>
    </ul>
  </div>
</template>

<style>
  /* .trackContainer {
    background: pink;
  } */
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
      }
    }
  }
</script>