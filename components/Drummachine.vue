<template>
<div>
  <v-btn v-on:click="start">Play audio</v-btn>

  <v-btn v-on:click="stop">Stop audio</v-btn>

<div v-for="track in pattern.tracks">
  <h2>{{ track.instrument }}</h2>
  <ul>
    <li v-for="(step, index) in track.steps">
      <Step :index="index" :active="step" :playing="index === currentStep" />
    </li>
  </ul>
</div>


</div>
</template>

<style>
  ul {
    list-style-type: none;
    padding-left: 0 !important;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    border: 1px solid green;
  }
</style>

<script>
import AudioEngine from '~/plugins/audioEngine.js'
import Step from '~/components/Step.vue'

const pattern = {
    name: "botthisway",
    stepCount: 16,
    beatsPerMinute: 100,
    tracks: [
        {
          instrument: "hihat",
          steps: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]
        },
        {
          instrument: "snare",
          steps: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]
        },
        {
          instrument: "clap",
          steps: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]
        },
        {
          instrument: "kick",
          steps: [1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0]
        }
    ]
}

  export default {
    name: "Drummachine",
    components: {
      Step
    },
    created: function () {
      const audioEngine = new AudioEngine({ onStep: ({ position }) => {
        this.onStep(position)
      }})

      audioEngine.prepare().then(() => {
        audioEngine.setPattern(this.$data.pattern)
      })

      this.$data.audioEngine = audioEngine
    },
    data: () => {
      return {
        pattern: pattern,
        currentStep: -1
      }
    },
    methods: {
      start: function () {
        this.$data.audioEngine.startClock(60);
      },
      stop: function () {
        this.$data.audioEngine.stopClock();
      },
      onStep: function (position) {
        this.$data.currentStep = position.step
      }
    }
  }
</script>