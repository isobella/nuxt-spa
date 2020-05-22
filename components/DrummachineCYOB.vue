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
          v-for="track in pattern.tracks"
          :key="track.instrument"
          :instrument="track.instrument"
          :steps="track.steps"
          :currentStep="currentStep"
          :playing="playing"
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
    }
  }
}
</script>