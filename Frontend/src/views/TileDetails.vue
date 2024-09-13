<script>
import TopLogoBar from '../components/TopLogoBar.vue';
import { useTilesStore } from '../stores/TileStore';

export default {
  name: 'TileDetails',
  props: {
    tileId: String,
  },
  data() {
    const store = useTilesStore();
    let tile;
    if (this.tileId === 0) {
      tile = {
        id: 0,
        name: '',
        width: 0,
        length: 0,
        squareMetersPerBox: 0,
        amountOfBoxes: 0,
        totalSquareMeters: 0,
      };
    } else {
      tile = store.getTileById(parseInt(this.tileId));
    }
    return {
      tile,
    };
  },
  components: {
    TopLogoBar,
  },
};
</script>

<template>
    <TopLogoBar />
    <div class="tile-details d-flex flex-column justify-center align-center mx-auto mt-10">
      <v-text-field
      width="100%"
        name="tileName"
        label="Tegelnaam"
        v-model="tile.name"
      ></v-text-field>
      <div class="tile-size d-flex flex-row justify-center align-center">
        <v-text-field
          name="tileWidth"
          label="Breedte"
          type="number"
          v-model="tile.width"
        ></v-text-field>
        <span class="mx-2">x</span>
        <v-text-field
          name="tileLength"
          label="Lengte"
          type="number"
          v-model="tile.length"
        ></v-text-field>
      </div>
    </div>
</template>

<style scoped>
.tile-details {
    width: 90%;
    max-width: 90%;
}
</style>
