<template>
<div>

  <v-container grid-list-xl class="fill-width">
    <v-layout fill-height>
      <v-flex xs6>
        <v-select
          :items="patternNames"
          label="Preset tracks"
          :value="selectedTrackIndex"
          v-on:change="changeTrack"
          :disabled="playing"
          outlined
          hide-details
        ></v-select>
      </v-flex>

      <v-flex xs6>
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
      v-for="track in patterns[selectedTrackIndex].tracks"
      :key="track.instrument"
      :instrument="track.instrument"
      :steps="track.steps"
      :currentStep="currentStep"
      :beatsPerMinute="patterns[selectedTrackIndex].beatsPerMinute"
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

const instuments = [
  'hihat',
  'snare',
  'clap',
  'kick',
  'cowbell',
  'ride',
  'rim'
]
export default {
  name: "Drummachine",
  components: {
    Track,
    InstrumentColorsKey,
    PlayStopButton,
    ColorPickerModal
  },
  created: function () {
    const audioEngine = new AudioEngine({ onStep: ({ position }) => {
      this.onStep(position)
    }})

    audioEngine.prepare().then(() => {
      // todo: show loading state while 'preparing'
      audioEngine.setPattern(this.$data.patterns[this.$data.selectedTrackIndex])
    })
    this.$data.patterns = this.$store.state.patterns.patterns
    this.$data.audioEngine = audioEngine
  },
  data: () => {
    return {
      patterns: [],
      instuments: instuments,
      currentStep: -1,
      playing: false,
      selectedTrackIndex: 1
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
    colorPickerOpen: function () {
      return this.$store.state.colorPicker.open
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