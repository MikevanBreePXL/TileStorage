import { defineStore } from 'pinia'

// the first argument is a unique id of the store across your application
export const useTilesStore = defineStore('tiles', {
  // other options...
  state: () => ({
    tiles: [
      { id: 1, name: 'AB KIMBERLEY', width: 30, length: 30 },
      { id: 2, name: 'Azteca Delhi 20 ash', width: 20, length: 80 },
      { id: 3, name: 'Azteca Moonlight Lux 120 black', width: 40, length: 120 },
    ],
  }),
  getters: {
    getTiles(state) {
      return state.tiles
    },
  },
})