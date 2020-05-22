<template>
<div>

  <v-container grid-list-xl class="fill-width">
    <v-layout fill-height wrap>

      <v-flex xs12>
        <PlayStopButton
          :play="start"
          :playing="playing"
          :stop="stop"
          :loading="loading"
        />
      </v-flex>

    <v-flex xs12>

      <div class="tracksContainer">
        <TrackCYOB
          v-for="(track, index) in pattern.tracks"
          :key="track.instrument"
          :instrument="track.instrument"
          :steps="track.steps"
          :currentStep="currentStep"
          :playing="playing"
          :onChangeInstrument="changeInstrumentForTrack"
          :onUpateStep="updateStepForTrack"
          :index="index"
        />
      </div>
    </v-flex>

    </v-layout>
  </v-container>
  
</div>
</template>

<style>
  .container.fill-width {
    padding-left: 0;
    padding-right: 0;
  }
  .tracksContainer {
    margin-top: 1rem;
  }
</style>


<script>
import AudioEngine from '~/static/js/audioEngine.js'
import PlayStopButton from '~/components/PlayStopButton.vue'
import TrackCYOB from '~/components/TrackCYOB.vue'
import _ from 'lodash'

export default {
  name: "Drummachine",
  components: {
    PlayStopButton,
    TrackCYOB
  },
  created: function () {
    const pattern = {
      'stepCount': 4,
      'beatsPerMinute': 60,
      'tracks': [
        {
          'instrument': 'clap',
          'steps': [1, 0, 1, 0]
        },
        {
          'instrument': 'kick',
          'steps': [1, 1, 0, 0]
        }
      ]
    }

    const audioEngine = new AudioEngine({ onStep: ({ position }) => {
      this.onStep(position)
    }})

    audioEngine.prepare().then(() => {
      this.$data.loading = false
      audioEngine.setPattern(pattern)
    })

    this.$data.pattern = pattern
    this.$data.audioEngine = audioEngine
  },
  data: () => {
    return {
      pattern: {},
      currentStep: -1,
      playing: false,
      loading: true
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    start: function () {
      this.$data.audioEngine.startClock(60);
      this.$data.playing = true;
    },
    stop: function () {
      this.$data.audioEngine.stopClock();
      this.$data.playing = false;
    },
    onStep: function (position) {
      this.$data.currentStep = position.step
    },
    changeInstrumentForTrack: function ({ trackIndex, instrument }) {
      const { pattern } = this.$data
      const currentTrack = pattern.tracks[trackIndex]
      const newTrack = {
        ...currentTrack,
        instrument
      }

      const newTracks = pattern.tracks
      newTracks[trackIndex] = newTrack

      const newPattern = {
        ...pattern,
        tracks: newTracks
      }

      this.$data.pattern = newPattern
    },
    updateStepForTrack: function ({ trackIndex, stepIndex, newStatus }) {
      console.log('hello', { trackIndex, stepIndex, newStatus })

      const newStepStatus = (newStatus) ? 1 : 0

      const { pattern } = this.$data
      const currentTrack = pattern.tracks[trackIndex]
      const newSteps = currentTrack.steps
      newSteps[stepIndex] = newStepStatus

      const newNewSteps = _.filter(newSteps, (item) => typeof item === 'number')

      const newTrack = {
        ...currentTrack,
        steps: newNewSteps
      }

      const newTracks = pattern.tracks
      newTracks[trackIndex] = newTrack

      const newPattern = {
        ...pattern,
        tracks: newTracks
      }
      this.$data.pattern = newPattern
    }
  }
}
</script>