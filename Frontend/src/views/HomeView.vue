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
    }
  },
  components: {
    NewTileCard,
    CustomTileCard,
    TopLogoBar,
    TileInfoCard,
  },
  mounted() {
    // Listen for visibility change (minimized/visible)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.store.saveData();  // Save when the app is minimized
      } else if (document.visibilityState === 'visible') {
        this.store.loadData();  // Load when the app becomes visible again
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.store.saveData();  // Save when the app is minimized
      } else if (document.visibilityState === 'visible') {
        this.store.loadData();  // Load when the app becomes visible again
      }
    });
  }
}
</script>

<template>
  <div class="home">
    <TopLogoBar/>
    <div class="list d-flex flex-column ga-2 justify-center align-center">
      <NewTileCard :to="{ name: 'TileDetails', params: { tileId: 'new' }}"/>
      <TileInfoCard/>
      <div v-for="tile in this.store.tiles" :key="tile.id">
        <RouterLink :to="{ name: 'TileDetails', params: { tileId: tile.id }}">
          <CustomTileCard :style="'animation-delay: ' + (250 * tile.id - 150) + 'ms'"
                          class="animate__animated fadeInLeft" height="100%" :name="tile.tilename"
                          :tileWidth="parseFloat(tile.width)" :tileLength="parseFloat(tile.length)"
                          :amountOfBoxes="parseFloat(tile.amountOfBoxes)"
                          :squareMetersPerBox="((Math.round(100 * tile.squareMetersPerBox)) / 100.0)"
                          :totalSquareMeters="((Math.round(100 * tile.totalSquareMeters)) / 100.0)"/>
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
