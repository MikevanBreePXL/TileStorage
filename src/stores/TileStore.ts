import {defineStore} from 'pinia';
import { openDB } from 'idb';

const DB_NAME = 'vanBreeDatabase';
const STORE_NAME = 'tiles';

// the first argument is a unique id of the store across your application
export const useTilesStore = defineStore(STORE_NAME, {
  // other options...
  state: () => ({
    tiles: [],
    db: null,
  }),
  getters: {
    getTiles(state) {
      return state.tiles
    },
  },
  actions: {
    getTileById(id) {
      return this.tiles.find(tile => tile.id === id)
    },
    async initDB() {
      if (!this.db) {
        this.db = await openDB(DB_NAME, 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
              db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
          },
        });
      }
    },
    async loadTiles() {
      await this.initDB();
      this.tiles = await this.db.getAll(STORE_NAME);
    },
    async saveTiles() {
      await this.initDB();
      for (const tile of this.tiles) {
        const plainTile = JSON.parse(JSON.stringify(tile));
        await this.db.put(STORE_NAME, plainTile);
      }
    },
    async addOrUpdateTile(tile) {
      await this.initDB();

      let tileToSave = { ...tile };
      if (tileToSave.id === -1) {
        delete tileToSave.id; // Remove id so autoIncrement works
      }

      // Ensure the object is a plain object (not a reactive proxy)
      const plainTile = JSON.parse(JSON.stringify(tileToSave));

      // Add or update the tile in IndexedDB
      const id = await this.db.put(STORE_NAME, plainTile);

      // If the tile was new, update its id with the auto-generated one
      if (!tile.id || tile.id === -1) {
        tile.id = id;

        // Add new tile to Pinia state
        this.tiles.push(tile);
      } else {
        // Update existing tile in Pinia state
        const index = this.tiles.findIndex(t => t.id === tile.id);
        this.tiles[index] = tile;
      }
    },
    async removeTile(id) {
      await this.initDB();
      await this.db.delete(STORE_NAME, id);
      this.tiles = this.tiles.filter(tile => tile.id !== id);
    },
    exportData() {
      return {...this.tiles};
    }
  }
});