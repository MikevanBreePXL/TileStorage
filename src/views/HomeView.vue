<script>
import CustomTileCard from '../components/HomeView/CustomTileCard.vue';
import NewTileCard from '../components/HomeView/NewTileCard.vue';
import TileInfoCard from '../components/HomeView/TileInfoCard.vue';
import TopLogoBar from '../components/TopLogoBar.vue';
import { useTilesStore } from '../stores/TileStore';

export default {
  name: 'HomeView',
  data() {
    let store = useTilesStore();
    return {
      store,
      list: null,
      searchActive: false,
      searchText: null,
    }
  },
  components: {
    NewTileCard,
    CustomTileCard,
    TopLogoBar,
    TileInfoCard,
  },
  methods: {
    search(e) {
      this.list = this.store.tiles.filter(tile => tile.tilename.toLowerCase().includes(e.target.value.toLowerCase()));
    },
    searchUnfocused() {
      if (this.searchText === null || this.searchText.length === 0) {
        console.log("Bye bye");
        this.searchActive = false;
      }
    }
  },
  async beforeMount() {
    await this.store.loadTiles();
    this.list = this.store.tiles;
  },
  mounted() {
    // Listen for visibility change (minimized/visible)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.store.saveTiles();  // Save when the app is minimized
      } else if (document.visibilityState === 'visible') {
        this.store.loadTiles();  // Load when the app becomes visible again
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.store.saveTiles();  // Save when the app is minimized
      } else if (document.visibilityState === 'visible') {
        this.store.loadTiles();  // Load when the app becomes visible again
      }
    });
  }
}
</script>

<template>
  <div class="home">
    <TopLogoBar/>
    <div class="list d-flex flex-column ga-2 justify-center align-center">
      <NewTileCard class="animate__animated fadeInLeft" :to="{ name: 'TileDetails', params: { tileId: 'new' }}"/>

      <TileInfoCard id="info-card" v-if="!searchActive" @click="searchActive = !searchActive" class="animate__animated fadeInLeft" style="animation-delay: 250ms"/>
        <v-text-field
            v-else
            prepend-inner-icon="fa-solid fa-magnifying-glass"
            color="secondary"
            width="90%"
            variant="solo"
            theme="light"
            hide-details="auto"
            v-model="searchText"
            @input="search"
            @update:focused="(isFocused) => {
              if (!isFocused) {
                console.log('Hello!');
                this.searchUnfocused();
              }
            }"
        ></v-text-field>

      <div v-for="(tile, index) in this.list" :key="tile.id">
        <RouterLink :to="{ name: 'TileDetails', params: { tileId: tile.id }}">
          <CustomTileCard class="animate__animated fadeInLeft" :style="'animation-delay: ' + (250 * index + 250) + 'ms'"
                          height="100%" width="90vw"
                          :name="tile.tilename" :image="tile.image"
                          :tileWidth="parseFloat(tile.width)" :tileLength="parseFloat(tile.length)"
                          :amountOfBoxes="parseFloat(tile.amountOfBoxes)"
                          :squareMetersPerBox="((Math.round(100 * tile.squareMetersPerBox)) / 100.0)"
                          :totalSquareMeters="((Math.round(100 * tile.totalSquareMeters)) / 100.0)"
                          :totalPrice="((Math.round(100 * tile.pricePerSquareMeter * tile.totalSquareMeters)) / 100.0)"
                          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-33%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft {
  animation-name: fadeInLeft;
}
</style>
