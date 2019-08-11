<template>
<div>

    <v-select
      :items="patternNames"
      label="Preset track"
      :value="selectedTrackIndex"
      v-on:change="changeTrack"
      :disabled="playing"
      outlined
    ></v-select>

  <PlayStopButton
    :play="start"
    :playing="playing"
    :stop="stop"
  />

  <div class="tracksContainer">
    <Track
      v-for="track in patterns[selectedTrackIndex].tracks"
      :key="track.instrument"
      :instrument="track.instrument"
      :steps="track.steps"
      :currentStep="currentStep"
      :beatsPerMinute="patterns[selectedTrackIndex].beatsPerMinute"
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

const patterns = [
  {
    "name": "oontza",
    "stepCount": 16,
    "beatsPerMinute": 110,
    "tracks": [
      {
        "instrument": "hihat",
        "steps": [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1]
      },
      {
        "instrument": "snare",
        "steps": [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]
      },
      {
        "instrument": "kick",
        "steps": [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]
      }
    ]
  },
  {
  "name": "bossanoopa",
  "stepCount": 16,
  "beatsPerMinute": 110,
  "tracks": [
    {
      "instrument": "ride",
      "steps": [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]
    },
    {
      "instrument": "hihat",
      "steps": [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]
    },
    {
      "instrument": "rim",
      "steps": [1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0]
    },
    {
      "instrument": "kick",
      "steps": [1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]
    }
  ]
}
]
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
        // todo: show loading state while 'preparing'
        audioEngine.setPattern(this.$data.patterns[this.$data.selectedTrackIndex])
      })

      this.$data.audioEngine = audioEngine
    },
    data: () => {
      return {
        patterns: patterns,
        instuments: instuments,
        currentStep: -1,
        playing: false,
        selectedTrackIndex: 1
      }
    },
    computed: {
      patternNames: function () {
        const patterns = this.$data.patterns
        return patterns.map((pattern, index) => {
          return {
            text: pattern.name,
            value: index
          }
        })
      }
    },
    methods: {
      start: function () {
        this.$data.audioEngine.startClock(this.$data.patterns[this.$data.selectedTrackIndex].beatsPerMinute);
        this.$data.playing = true;
      },
      stop: function () {
        this.$data.audioEngine.stopClock();
        this.$data.playing = false;
      },
      onStep: function (position) {
        this.$data.currentStep = position.step
      },
      changeTrack: function (index) {
        this.$data.audioEngine.setPattern(this.$data.patterns[index])
        this.$data.selectedTrackIndex = index
      }
    }
  }
</script>