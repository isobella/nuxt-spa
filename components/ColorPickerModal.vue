<template>
    <v-dialog
      v-model="open"
      persistent
    >
      <v-card>
        <v-card-title
          :class="titleClasses"
        >
        Select {{ instrument }} colour
      </v-card-title>
        <v-card-text class="colorPickerContainer">
          <v-color-picker
            width="auto"
            mode="hexa"
            flat
            hide-canvas
            hide-inputs
            :value="color"
            v-on:update:color="updateColor"
            show-swatches
            />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>

          <v-spacer></v-spacer>

          <v-btn
            :color="instrumnetColor"
            block
            :dark="isDarkColor"
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
import Color from 'color'
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
        isDarkColor: false,
        titleClasses: `headline`
      }
    },
    computed: {
      instrument: function () {
        return this.$store.state.colorPicker.instrument
      },
      instrumnetColor: function () {
        const { instrument } = this
        return `${instrument}Color`
      },
      color: function () {
        const { instrument } = this
        return this.$store.state.instrumentColors[instrument]
      },
    },
    watch: {
      color: function (color) {
        const colorData = Color(color)
        this.$data.isDarkColor = colorData.isDark()
      },
      instrument: function (instrument) {
        this.$data.titleClasses = `headline ${instrument}Color`
      }
    },
    methods: {
      close: function () {
        this.$store.commit('colorPicker/close')
      },
      updateColor: function ({ hex }) {
        const { instrument } = this
        const root = document.documentElement
        const colorData = Color(hex)
        const darken1Data = colorData.darken(0.2)
        const lighten2Data = colorData.lighten(0.5)

        root.style.setProperty(`--v-${instrument}Color-base`, hex)
        root.style.setProperty(`--v-${instrument}Color-darken1`, darken1Data.hex())
        root.style.setProperty(`--v-${instrument}Color-lighten2`, lighten2Data.hex())

        this.$store.commit('instrumentColors/changeInstrumentColor', { instrument: this.instrument, color: hex })
        
        // todo: should set these as well really...
        // --v-hihatColor-lighten5: #dcffd6;
        // --v-hihatColor-lighten4: #beffba;
        // --v-hihatColor-lighten3: #a2ff9e;
        // --v-hihatColor-lighten1: #69cb69;
        // --v-hihatColor-darken2: #00791e;
        // --v-hihatColor-darken3: #006000;
        // --v-hihatColor-darken4: #004700;
      }
    }
  }
</script>