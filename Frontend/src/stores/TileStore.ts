import { defineStore } from 'pinia'

// the first argument is a unique id of the store across your application
export const useTilesStore = defineStore('tiles', {
  // other options...
  state: () => ({
    tiles: [
      { id: 1, name: 'AB KIMBERLEY' },
      { id: 2, name: 'Azteca Delhi 20 ash' },
      { id: 3, name: 'Azteca Moonlight Lux 120 black' },
    ],
  }),
})