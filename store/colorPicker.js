export const state = () => ({
  open: false,
  instrument: ''
})

export const mutations = {
  open (state, { open, instrument }) {
    state.open = open
    state.instrument = instrument
  },
  close (state) {
    state.open = false
  }
}
