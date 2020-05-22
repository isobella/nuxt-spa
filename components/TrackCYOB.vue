<template>
  <div class="trackContainer">
    <ul class="stepsList">
      <StepCYOB
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
        :onStepClick="onStepClick"
      />
    </ul>
  </div>
</template>

<style>
  /* .trackContainer {
    margin-bottom: 2rem;
  } */
  .stepsList {
    list-style-type: none;
    padding-left: 0 !important;
    display: flex;
    justify-content: space-between;
  }
</style>

<script>
import StepCYOB from '~/components/StepCYOB.vue'
  export default {
    name: "Track",
    components: {
      StepCYOB
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
      },
      index: {
        type: Number,
        required: true
      },
      onUpateStep: {
        type: Function
      }
    },
    data: () => {
      return {
        instruments: [
          'clap', 'cowbell', 'hihat', 'kick', 'ride', 'rim', 'snare'
        ]
      }
    },
    methods: {
      onStepClick: function ({ stepIndex, newStatus }) {
        this.$props.onUpateStep({
          trackIndex: this.$props.index,
          stepIndex,
          newStatus
        })
      }
    }
  }
</script>