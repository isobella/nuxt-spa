<template>
    <v-dialog
      v-model="open"
      persistent
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
        >
        Select {{ instrument }} colour
      </v-card-title>

        <v-card-text class="colorPickerContainer">
          <v-color-picker
            width="300"
            hide-inputs
            show-swatches
            />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>

          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            v-on:click="close"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<style>
  .colorPickerContainer {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
</style>

<script>
  export default {
    name: "ColorPickerModal",
    props: {
      open: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      instrument: function () {
        return this.$store.state.colorPicker.instrument
      }
    },
    methods: {
      close: function () {
        this.$store.commit('colorPicker/close')
      }
    }
  }
</script>