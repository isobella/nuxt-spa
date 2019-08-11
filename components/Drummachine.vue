<template>
<div>

  <PlayStopButton
    :play="start"
    :playing="playing"
    :stop="stop"
  />

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

  <InstrumentColorsKey :instruments="instuments"/>
  

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
import PlayStopButton from '~/components/PlayStopButton.vue'
import Track from '~/components/Track.vue'
import InstrumentColorsKey from '~/components/InstrumentColorsKey.vue'

const instuments = [
  'hihat',
  'snare',
  'clap',
  'kick',
  'cowbell',
  'ride',
  'rim'
]

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
        },

        {
          instrument: "cowbell",
          steps: [0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0]
        },
        {
          instrument: "ride",
          steps: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1]
        },
        {
          instrument: "rim",
          steps: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]
        }
    ]
}

  export default {
    name: "Drummachine",
    components: {
      Track,
      InstrumentColorsKey,
      PlayStopButton
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
        instuments: instuments,
        currentStep: -1,
        playing: false
      }
    },
    methods: {
      start: function () {
        this.$data.audioEngine.startClock(this.$data.pattern.beatsPerMinute);
        this.$data.playing = true;
      },
      stop: function () {
        this.$data.audioEngine.stopClock();
        this.$data.playing = false;
      },
      onStep: function (position) {
        this.$data.currentStep = position.step
      }
    }
  }
</script>