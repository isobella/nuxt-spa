<template>
<div>
  <v-btn
    v-on:click="start"
    color="primary"
  >
    Play audio
  </v-btn>

  <v-btn
    v-on:click="stop"
    color="primary"
  >
    Stop audio
  </v-btn>

  <div class="tracksContainer">
    <Track
      v-for="track in pattern.tracks"
      :key="track.instrument"
      :instrument="track.instrument"
      :steps="track.steps"
      :currentStep="currentStep"
      :beatsPerMinute="pattern.beatsPerMinute"
    />
  </div>

</div>
</template>

<style>
  .tracksContainer {
    margin-top: 1rem;
    overflow: hidden;
  }
</style>


<script>
import AudioEngine from '~/plugins/audioEngine.js'
import Track from '~/components/Track.vue'

const pattern = {
    name: "botthisway",
    stepCount: 16,
    beatsPerMinute: 60,
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
      Track
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
        this.$data.audioEngine.startClock(this.$data.pattern.beatsPerMinute);
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