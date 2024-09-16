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
      tile = Object.assign({}, store.getTileById(parseInt(this.tileId)));
    }
    console.log(tile);

    return {
      store,
      tile,
      isTotalCalculated: false,
    };
  },
  components: {
    TopLogoBar,
  },
  methods: {
    saveTile() {
      let form = document.getElementById('details-form');
      form.classList.add('fadeOutRight');
      this.store.saveTile(this.tile);

      setTimeout(() => {
        this.$router.back();
      }, 1000);
    },
    CalculateTotalSquareMeters() {
      if (this.isTotalCalculated) {
        this.tile.totalSquareMeters = parseFloat(this.tile.squareMetersPerBox) * parseFloat(this.tile.amountOfBoxes);
        console.log(this.tile.totalSquareMeters);
      }
    }
  }
};
</script>

<template>
  <div id="details-page" class="details-page d-flex flex-column">
    <TopLogoBar />
    <div id="details-form" class="animate__animated">
      <div class="w-90 mx-auto mt-10 d-flex flex-column justify-center align-center">
        <v-text-field
          width="100%"
          name="tileName"
          label="Tegelnaam"
          v-model="this.tile.tilename"
        ></v-text-field>

        <div class="tile-size d-flex flex-row justify-center align-center w-100">
          <v-text-field
            name="tileWidth"
            label="Breedte"
            type="number"
            v-model="this.tile.width"
          ></v-text-field>
          <span class="mx-2">x</span>
          <v-text-field
            name="tileLength"
            label="Lengte"
            type="number"
            v-model="this.tile.length"
          ></v-text-field>
        </div>
      
        <div class="boxes d-flex flex-row align-center w-100">
          <v-text-field
            width="50%"
            name="amountOfBoxes"
            label="Aantal dozen"
            v-model="this.tile.amountOfBoxes"
          ></v-text-field>
          <span class="mx-2">x</span>
          <v-text-field
            width="50%"
            name="squareMetersPerBox"
            label="m² per doos"
            type="number"
            v-model="this.tile.squareMetersPerBox"
          ></v-text-field>
        </div>

        <div class="total-square-meters d-flex flex-row align-start w-100">
          <div class="d-flex flex-column text-center justify-center align-center mr-5">
            <v-checkbox-btn v-model="isTotalCalculated" @change="CalculateTotalSquareMeters()" hide-details></v-checkbox-btn>
            <span style="color: #bbb;">Berekend</span>
          </div>
          <v-text-field
            width="50%"
            name="totalSquareMeters"
            label="Totaal m²"
            v-bind:disabled="isTotalCalculated"
            v-model="this.tile.totalSquareMeters"
          ></v-text-field>
        </div>
      </div>
    </div>

    <div class="buttons w-90 mx-auto d-flex flex-row justify-space-between" z-index="2">
      <a @click="$router.back()"><v-btn width="42vw" color="red-darken-3" dark>Annuleren</v-btn></a>
      <v-btn id="save-button" width="42vw" color="green-darken-2" dark :onclick="saveTile">
        <v-btn-text>Opslaan</v-btn-text>
      </v-btn>
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

@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
}

.fadeOutRight {
  animation-name: fadeOutRight;
  animation-duration: 0.66s;
}
</style>
