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
        id: -1,
        tilename: '',
        width: null,
        length: null,
        squareMetersPerBox: null,
        amountOfBoxes: null,
        totalSquareMeters: null,
        pricePerSquareMeter: null,
      };
    } else {
      tile = Object.assign({}, store.getTileById(parseInt(this.tileId)));
      console.log("total price:");
      console.log(tile.pricePerSquareMeter);
      if (tile.pricePerSquareMeter === undefined) {
        console.log("adding total price property to tile...");
        tile["pricePerSquareMeter"] = 0;
        tile.pricePerSquareMeter = 0;
      }
    }
    console.log(tile);

    return {
      store,
      tile,
      isTotalCalculated: false,
      totalPrice: tile.pricePerSquareMeter * tile.totalSquareMeters,
      dialog: false,
    };
  },
  components: {
    TopLogoBar,
  },
  methods: {
    async saveTile() {
      document.getElementById('details-form').classList.add('fadeOutRight');
      document.getElementById('form-buttons').classList.add('animate__animated', 'animate__fadeOut');
      this.tile.pricePerSquareMeter = parseFloat(this.tile.pricePerSquareMeter);

      console.log("saved result:");
      console.log(this.tile);

      await this.store.addOrUpdateTile(this.tile);

      setTimeout(() => {
        this.$router.back();
      }, 1000);
    },
    removeTile() {
      document.getElementById('details-form').classList.add('animate__fadeOut');
      document.getElementById('form-buttons').classList.add('animate__animated', 'animate__fadeOut');
      
      this.store.removeTile(this.tile.id);
      this.dialog = false;
      
      setTimeout(() => {
        this.$router.back();
      }, 1000);
    },
    CalculateTotalSquareMeters() {
      if (this.isTotalCalculated) {
        this.tile.totalSquareMeters = ((parseFloat(this.tile.squareMetersPerBox * 100) * parseFloat(this.tile.amountOfBoxes * 100)) / 10000.0).toFixed(3);
        this.totalPrice = (((this.tile.pricePerSquareMeter * 100) * (this.tile.totalSquareMeters * 100)) / 10000.0).toFixed(2);
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
          variant="outlined"
          width="100%"
          name="tileName"
          label="Tegelnaam"
          color="secondary"
          v-model="this.tile.tilename"
          @focus="$event.target.select()"
        ></v-text-field>

        <div class="tile-size d-flex flex-row justify-center align-center w-100">
          <v-text-field
            variant="outlined"
            name="tileWidth"
            label="Breedte"
            color="secondary"
            type="number"
            v-model="this.tile.width"
            @focus="$event.target.select()"
          ></v-text-field>
          <span class="mx-2">x</span>
          <v-text-field
            variant="outlined"
            name="tileLength"
            label="Lengte"
            color="secondary"
            type="number"
            v-model="this.tile.length"
            @focus="$event.target.select()"
          ></v-text-field>
        </div>
      
        <div class="boxes d-flex flex-row align-center w-100">
          <v-text-field
            variant="outlined"
            width="50%"
            name="amountOfBoxes"
            label="Aantal dozen"
            color="secondary"
            type="number"
            v-model="this.tile.amountOfBoxes"
            @change="CalculateTotalSquareMeters"
            @focus="$event.target.select()"
          ></v-text-field>
          <span class="mx-2">x</span>
          <v-text-field
            variant="outlined"
            width="50%"
            name="squareMetersPerBox"
            label="m² per doos"
            color="secondary"
            type="number"
            v-model="this.tile.squareMetersPerBox"
            v-on:update:model-value="CalculateTotalSquareMeters"
            @focus="$event.target.select()"
          ></v-text-field>
        </div>

        <v-text-field
          variant="outlined"
          width="100%"
          name="totalSquareMeters"
          label="Totaal m²"
          color="secondary"
          v-bind:disabled="isTotalCalculated"
          v-model="this.tile.totalSquareMeters"
          @focus="$event.target.select()"
        ></v-text-field>

        <div class="total-price d-flex flex-row align-start w-100 ga-4">
          <v-text-field
            variant="outlined"
            class="pr-0"
            id="total-price"
            width="40%"
            prefix="€"
            type="number"
            label="Totaalprijs"
            v-model:value="this.totalPrice"
            readonly
          >
          </v-text-field>
          <v-text-field
            variant="outlined"
            class="align-self-end"
            prefix="€"
            type="number" min="0.00" max="10000.00" step="0.01"
            width="60%"
            name="pricePerSquareMeter"
            label="Prijs per m²"
            color="secondary"
            v-model="this.tile.pricePerSquareMeter"
            @focus="$event.target.select()"
            @change="this.totalPrice = (this.tile.pricePerSquareMeter * this.tile.totalSquareMeters).toFixed(2)"
          ></v-text-field>
        </div>

        <div id="form-buttons" class="buttons w-90 mx-auto d-flex flex-row justify-space-between">
          <a @click="$router.back()"><v-btn
                                      width="42vw"
                                      color="red-darken-4"
                                      >
            Annuleren
          </v-btn></a>
          <v-btn :onclick="saveTile"
            id="save-button"
            width="42vw"
            color="green-darken-3">
            Opslaan
          </v-btn>
        </div>

        <div class="w-100 mb-15">
          <v-btn
              @click="dialog = true"
              prepend-icon="fa-solid fa-trash-can"
              class="mt-2 mb-10 text-red-accent-4"
              color="black"
              width="100%"
              text="Verwijder tegel"
          ></v-btn>
          <v-dialog
            v-model="dialog"
            width="auto"
          >
            <v-card
              max-width="400"
              title="Verwijderen bevestigen"
              text="Weet je zeker dat je de tegel wilt verwijderen uit de lijst?"
              color="red-darken-3"
            >
              <template v-slot:prepend>
                <v-icon icon="fa-solid fa-trash-can" color="black"></v-icon>
              </template>
              <template v-slot:actions>
                <v-btn
                    variant="tonal"
                    color="black"
                    text="Annuleren"
                    @click="dialog = false"
                ></v-btn>
                <v-btn
                    variant="elevated"
                    color="black"
                    text="Verwijderen"
                    @click="removeTile"
                ></v-btn>
              </template>
            </v-card>
          </v-dialog>
        </div>
      </div>
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
  position: fixed;
  z-index: 2;
  bottom: 3em;
  width: 100vw;
  left: 0;
  right: 0;
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
