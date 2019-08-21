import colors from 'vuetify/es5/util/colors'

export const state = () => ({
  hihat: colors.green.base,
  clap: colors.pink.base,
  cowbell: colors.purple.base,
  kick: colors.lime.base,
  ride: colors.red.base,
  rim: colors.blue.base,
  snare: colors.orange.base
})

export const mutations = {
  changeInstrumentColor (state, { instrument, color }) {
    state[instrument] = color
  }
}
