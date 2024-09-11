import { defineStore } from 'pinia'

// the first argument is a unique id of the store across your application
export const useTilesStore = defineStore('tiles', {
  // other options...
  state: () => ({
    tiles: [
      { id: 1, name: 'Tile 1' },
      { id: 2, name: 'Tile 2' },
      { id: 3, name: 'Tile 3' },
    ],
  }),
})