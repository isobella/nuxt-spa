<template>
<div>

  <v-container grid-list-xl class="fill-width">
    <v-layout fill-height wrap>
      <v-flex xs6 sm4>
        <v-select
          :items="patternNames"
          label="Preset track"
          :value="selectedPatternIndex"
          v-on:change="changeTrack"
          :disabled="playing"
          outlined
          hide-details
        ></v-select>
      </v-flex>

      <v-flex xs6 sm2>
        <v-text-field
          label="Beats per min"
          :value="beatsPerMin"
          :disabled="playing"
          v-on:change="setBeatsPerMin"
          type="number"
          hide-details
          outlined
        />
      </v-flex>

      <v-flex xs12 sm6>
        <PlayStopButton
          :play="start"
          :playing="playing"
          :stop="stop"
          :loading="loading"
        />
      </v-flex>

    </v-layout>
  </v-container>

  <div class="tracksContainer">
    <Track
      v-for="track in patterns[selectedPatternIndex].tracks"
      :key="track.instrument"
      :instrument="track.instrument"
      :steps="track.steps"
      :currentStep="currentStep"
    />
  </div>

  <InstrumentColorsKey :instruments="instuments"/>

  <ColorPickerModal
    :open="colorPickerOpen"
    />
  
</div>
</template>

<style>
  .container.fill-width {
    padding-left: 0;
    padding-right: 0;
  }
  .tracksContainer {
    margin-top: 1rem;
    overflow: hidden;
  }
</style>


<script>
import AudioEngine from '~/static/js/audioEngine.js'
import PlayStopButton from '~/components/PlayStopButton.vue'
import Track from '~/components/Track.vue'
import InstrumentColorsKey from '~/components/InstrumentColorsKey.vue'
import ColorPickerModal from '~/components/ColorPickerModal.vue'

export default {
  name: "Drummachine",
  components: {
    Track,
    InstrumentColorsKey,
    PlayStopButton,
    ColorPickerModal
  },
  created: function () {
    const patterns = this.$store.state.patterns.patterns
    const selectedPattern = patterns[this.selectedPatternIndex]

    const audioEngine = new AudioEngine({ onStep: ({ position }) => {
      this.onStep(position)
    }})

    audioEngine.prepare().then(() => {
      this.$data.loading = false
      audioEngine.setPattern(selectedPattern)
    })

    const beatAnimationDuration = 60 / selectedPattern.beatsPerMinute
    document.documentElement.style.setProperty(`--beat-animation-duration`, `${beatAnimationDuration}s`)
    
    this.$data.patterns = patterns
    this.$data.audioEngine = audioEngine
  },
  data: () => {
    return {
      patterns: [],
      currentStep: -1,
      playing: false,
      loading: true
    }
  },
  computed: {
    patternNames: function () {
      return this.$data.patterns.map((pattern, index) => {
        return {
          text: pattern.name,
          value: index
        }
      })
    },
    selectedPatternIndex: function () {
      return this.$store.state.patterns.selectedPatternIndex
    },
    colorPickerOpen: function () {
      return this.$store.state.colorPicker.open
    },
    instuments: function () {
      return this.$store.getters['patterns/instrumentsInSelectedPattern']
    },
    beatsPerMin: function () {
      return this.$store.getters['patterns/beatsPerMin']
    }
  },
  watch: {
    beatsPerMin: function (bpm) {
      const beatAnimationDuration = 60 / bpm
      document.documentElement.style.setProperty(`--beat-animation-duration`, `${beatAnimationDuration}s`)
    }
  },
  methods: {
    start: function () {
      this.$data.audioEngine.startClock(this.beatsPerMin);
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
      this.setBeatsPerMin(undefined)
      this.$store.commit('patterns/changeSelectedPattern', index)
    },
    setBeatsPerMin: function (value) {
      this.$store.commit('patterns/setCustomBeatsPerMin', value)
    }
  }
}
</script>