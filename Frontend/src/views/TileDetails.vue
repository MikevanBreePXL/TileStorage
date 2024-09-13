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
    if (this.tileId === 'new') {
      tile = {
        id: 0,
        tilename: '',
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
      isTotalCalculated: false,
    };
  },
  components: {
    TopLogoBar,
  },
  methods: {
    saveTile() {
      alert("Nog niet geimplementeerd... :(");
      this.$router.push('/');
    }
  }
};
</script>

<template>
  <div class="details-page d-flex flex-column">
    <TopLogoBar />

    <div class="w-90 mx-auto mt-10 d-flex flex-column justify-center align-center">
      <v-text-field
        width="100%"
        name="tileName"
        label="Tegelnaam"
        v-model="this.tile.tilename"
      ></v-text-field>

      <div class="tile-size d-flex flex-row justify-center align-center">
        <v-text-field
          name="tileWidth"
          label="Breedte"
          type="number"
          :v-model="this.tile.width !== 0 ? this.tile.width : ''"
        ></v-text-field>
        <span class="mx-2">x</span>
        <v-text-field
          name="tileLength"
          label="Lengte"
          type="number"
          :v-model="this.tile.length !== 0 ? this.tile.length : ''"
        ></v-text-field>
      </div>
    
      <div class="boxes d-flex flex-row align-center w-100">
        <v-text-field
          width="50%"
          name="amountOfBoxes"
          label="Aantal dozen"
          :v-model="this.tile.amountOfBoxes !== 0 ? this.tile.amountOfBoxes : ''"
        ></v-text-field>
        <span class="mx-2">x</span>
        <v-text-field
          width="50%"
          name="squareMetersPerBox"
          label="m² per doos"
          type="number"
          :v-model="this.tile.squareMetersPerBox !== 0 ? this.tile.squareMetersPerBox : ''"
        ></v-text-field>
      </div>

      <div class="total-square-meters d-flex flex-row align-start w-100">
        <div class="d-flex flex-column text-center justify-center align-center mr-5">
          <v-checkbox-btn v-model="isTotalCalculated" hide-details></v-checkbox-btn>
          <span style="color: #bbb;">Berekend</span>
        </div>
        <v-text-field
          width="50%"
          name="totalSquareMeters"
          label="Totaal m²"
          v-bind:disabled="isTotalCalculated"
        ></v-text-field>
      </div>
    </div>

    <div class="buttons w-90 mx-auto d-flex flex-row justify-space-between" z-index="2">
      <RouterLink to="/"><v-btn width="42vw" color="red-darken-3" dark>Annuleren</v-btn></RouterLink>
      <v-btn width="42vw" color="green-darken-2" dark :onclick="saveTile">Opslaan</v-btn>
    </div>
  </div>
</template>

<style scoped>
.w-90 {
    width: 90%;
    max-width: 90%;
}

.details-page {
  height: 100vh;
}

.buttons {
  position: absolute;
  bottom: 3em;
  left: 5vw;
}
</style>
