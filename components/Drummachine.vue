<template>
<div>

  <v-container grid-list-xl class="fill-width">
    <v-layout fill-height>
      <v-flex xs5>
        <v-select
          :items="patternNames"
          label="Preset tracks"
          :value="selectedPatternIndex"
          v-on:change="changeTrack"
          :disabled="playing"
          outlined
          hide-details
        ></v-select>
      </v-flex>

      <v-flex xs3>
        <v-text-field
          label="Beats per min"
          :value="beatsPerMin"
          :disabled="playing"
          type="number"
          hide-details
          outlined
        />
      </v-flex>

      <v-flex xs4>
        <PlayStopButton
          :play="start"
          :playing="playing"
          :stop="stop"
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
      :beatsPerMinute="beatsPerMin"
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

    const audioEngine = new AudioEngine({ onStep: ({ position }) => {
      this.onStep(position)
    }})

    audioEngine.prepare().then(() => {
      // todo: show loading state while 'preparing'
      audioEngine.setPattern(patterns[this.selectedPatternIndex])
    })
    this.$data.patterns = patterns
    this.$data.audioEngine = audioEngine
  },
  data: () => {
    return {
      patterns: [],
      currentStep: -1,
      playing: false,
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
      this.$store.commit('patterns/changeSelectedPattern', index)
    }
  }
}
</script>