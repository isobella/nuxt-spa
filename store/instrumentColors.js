import colors from 'vuetify/es5/util/colors'

export const state = () => ({
  hihat: colors.green.lighten1,
  clap: colors.pink.lighten1,
  cowbell: colors.purple.lighten1,
  kick: colors.lime.lighten1,
  ride: colors.red.lighten1,
  rim: colors.blue.lighten1,
  snare: colors.orange.lighten1
})

export const mutations = {
  changeInstrumentColor (state, { instrument, color }) {
    state[instrument] = color
  }
}
