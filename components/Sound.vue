<template>
<div>
  <!-- <audio src="@/assets/sounds/clap.wav"></audio> -->

  <v-btn v-on:click="start">Play audio</v-btn>

  <v-btn v-on:click="stop">Stop audio</v-btn>
</div>
</template>

<script>
import AudioEngine from '~/plugins/audioEngine.js'

const pattern = {
    name: "botthisway",
    stepCount: 16,
    beatsPerMinute: 100,
    tracks: [
        {
            instrument: "hihat",
            steps: [
                1,
                0,
                1,
                0,
                1,
                0,
                1,
                0,
                1,
                0,
                1,
                0,
                1,
                0,
                1,
                0
            ]
        },
        {
            instrument: "snare",
            steps: [
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0
            ]
        },
        {
            instrument: "clap",
            steps: [
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0
            ]
        },
        {
            instrument: "kick",
            steps: [
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                1,
                0,
                0,
                0,
                0,
                0
            ]
        }
    ]
}

  export default {
    name: "Sound",
    created: function () {
      const love = new AudioEngine({ onStep: ({ position }) => {
        this.onStep(position)
      }})
      love.prepare().then(() => {
        love.setPattern(pattern)
      })

      this.$data.love = love
    },
    methods: {
      start: function () {
        this.$data.love.startClock(60);
      },
      stop: function () {
        this.$data.love.stopClock();
      },
      onStep: function (position) {
        console.log('hello', position)
      }
    }
  }
</script>