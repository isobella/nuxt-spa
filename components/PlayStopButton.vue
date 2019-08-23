<template>

    <v-btn
      v-on:click="toggle"
      color="primary"
      outlined
      block
      class="playButton"
      :disabled="loading"
      :loading="loading"
    >
      {{ buttonText }}
      <v-icon>{{ icon }}</v-icon>
      <template v-slot:loader>
        <div class="loadingContainer">
          Loading sounds...
          <v-progress-linear indeterminate></v-progress-linear>
        </div>
      </template>
    </v-btn>
</template>

<style scoped>
  .playButton {
    min-height: 56px;
  }
  .loadingContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 1rem;
    justify-content: space-between;
  }
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
      },
      loading: {
        type: Boolean,
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