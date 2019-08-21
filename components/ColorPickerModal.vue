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
            width="auto"
            flat
            hide-canvas
            hide-inputs
            v-model="color"
            show-swatches
            />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>

          <v-spacer></v-spacer>

          <v-btn
            :color="buttonColor"
            block
            v-on:click="close"
          >
            Save
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
    data: () => {
      return {
        color: ''
      }
    },
    watch: {
      color: function (color) {
        // --v-hihatColor-base: 
        // --v-hihatColor-lighten2: #85e783;
        // --v-hihatColor-darken1: #2d9437;

        // --v-hihatColor-lighten5: #dcffd6;
        // --v-hihatColor-lighten4: #beffba;
        // --v-hihatColor-lighten3: #a2ff9e;
        // --v-hihatColor-lighten1: #69cb69;
        // --v-hihatColor-darken2: #00791e;
        // --v-hihatColor-darken3: #006000;
        // --v-hihatColor-darken4: #004700;

        const { instrument } = this

        let root = document.documentElement

        root.style.setProperty(`--v-${instrument}Color-base`, color)

        // todo: need to install color helper to choose darken1, and ligthen2 colors

        // root.style.setProperty('--v-hihatColor-darken1', '#EC407A')
      }
    },
    computed: {
      instrument: function () {
        return this.$store.state.colorPicker.instrument
      },
      buttonColor: function () {
        const { instrument } = this
        return `${instrument}Color`
      }
    },
    methods: {
      close: function () {
        this.$store.commit('colorPicker/close')
      }
    }
  }
</script>