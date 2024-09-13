import { defineStore } from 'pinia'

// the first argument is a unique id of the store across your application
export const useTilesStore = defineStore('tiles', {
  // other options...
  state: () => ({
    tiles: [
      { id: 1, name: 'AB KIMBERLEY', width: 30, length: 30, squareMetersPerBox: 2.128, amountOfBoxes: 10, totalSquareMeters: 21.28 },
      { id: 2, name: 'Azteca Delhi 20 ash', width: 20, length: 80, squareMetersPerBox: 2.125, amountOfBoxes: 4, totalSquareMeters: 8.5 },
      { id: 3, name: 'Azteca Moonlight Lux 120 black', width: 40, length: 120, squareMetersPerBox: 2.125, amountOfBoxes: 3, totalSquareMeters: 6.375 },
    ],
  }),
  getters: {
    getTiles(state) {
      return state.tiles
    },
  },
  actions: {
    getTileById(id) {
      return this.tiles.find(tile => tile.id === id)
    }
  },
})