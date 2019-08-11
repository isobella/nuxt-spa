<template>

    <v-btn
      v-on:click="toggle"
      color="primary"
    >
      {{ buttonText }}
    </v-btn>
</template>

<style>
</style>

<script>
  export default {
    name: "PlayStopButton",
    props: {
      playing: {
        type: Boolean,
        required: true
      },
      play: {
        type: Function,
        required: true
      },
      stop: {
        type: Function,
        required: true
      }
    },
    computed: {
      buttonText: function () {
        return (this.playing) ? 'Stop audio' : 'Play audio'
      }
    },
    methods: {
      toggle: function () {
        const { playing, play, stop } = this
        if (!playing) {
          play()
        } else {
          stop()
        }
      }
    }
  }
</script>