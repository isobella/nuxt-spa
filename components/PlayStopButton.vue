<template>

    <v-btn
      v-on:click="toggle"
      color="primary"
      outlined
    >
      {{ buttonText }}
      <v-icon>{{ icon }}</v-icon>
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
        return (this.playing) ? 'Stop' : 'Play'
      },
      icon: function () {
        return (this.playing) ? 'mdi-stop' : 'mdi-play'
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