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
        amountOfBoxes: null,
        squareMetersPerBox: null,
        totalSquareMeters: null,
        pricePerSquareMeter: null,
        image: null,
      };
    } else {
      tile = Object.assign(
        {},
        store.getTileById(parseInt(this.tileId))
      );
    }
    let totalPrice = null;
    if (!Number.isNaN(tile.pricePerSquareMeter * tile.totalSquareMeters)) {
      totalPrice = tile.pricePerSquareMeter * tile.totalSquareMeters;
    }

    return {
      store,
      tile,
      totalPrice,
      dialog: false,
    };
  },
  components: {
    TopLogoBar,
  },
  methods: {
    uploadImage(e){
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{
        this.tile.image = e.target.result;
        console.log(this.tile.image);
      };
    },
    removeImage() {
      document.getElementById('image-view').classList.add('animate__animated', 'animate__fadeOutRight');
      setTimeout(() => {
        this.tile.image = '';
        document.getElementById('image-view').classList.remove('animate__animated', 'animate__fadeOutRight');
      }, 1000);
    },
    downloadImage() {
      const blob = new Blob([this.tile.image], { type: 'image/png' })
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = this.tile.image.split(';')[0];
      link.click();
    },
    async saveTile() {
      document.getElementById('details-form').classList.add('fadeOutRight');
      document.getElementById('form-buttons').classList.add('animate__animated', 'animate__fadeOut');
      this.tile.pricePerSquareMeter = parseFloat(this.tile.pricePerSquareMeter);

      await this.store.addOrUpdateTile(this.tile);
      setTimeout(() => {
        this.store.saveTiles();
        this.$router.back();
      }, 1000);
    },
    removeTile() {
      document.getElementById('details-form').classList.add('animate__fadeOut');
      document.getElementById('form-buttons').classList.add('animate__animated', 'animate__fadeOut');
      
      this.store.removeTile(this.tile.id);
      this.dialog = false;
      setTimeout(() => {
        this.store.saveTiles();
        this.$router.back();
      }, 1000);
    },
    CalculateTotalSquareMeters() {
      this.tile.totalSquareMeters = (this.tile.squareMetersPerBox * this.tile.amountOfBoxes ).toFixed(2);
      this.CalculatePriceTotal();
    },
    CalculatePriceTotal() {
      this.totalPrice = (this.tile.pricePerSquareMeter * this.tile.totalSquareMeters).toFixed(2);
    },
    CalculatePricePerSquareMeter() {
      this.tile.pricePerSquareMeter = (this.totalPrice / this.tile.totalSquareMeters).toFixed(2);
    },
    CalculateAmountOfBoxes() {
      this.tile.amountOfBoxes = (this.tile.totalSquareMeters / this.tile.squareMetersPerBox).toFixed(2);
    }
  }
};
</script>

<template>
  <div id="details-page" class="details-page d-flex flex-column">
    <TopLogoBar />
    <div id="details-form" class="animate__animated">
      <div class="w-90 mx-auto d-flex flex-column justify-center align-center">
        <div id="tile-image" class="d-flex flex-column justify-center align-center">
          <div id="image-view" class="ml-1">
            <img :src="tile.image" class="image flex-1-1 pt-5" max-width="80" alt=""></img>
            <v-fab
              v-if="tile.image"
              icon="fa-solid fa-download"
              color="grey-darken-3"
              @click="downloadImage"
            ></v-fab>
          </div>
          <v-file-input
              label="Afbeelding kiezen"
              variant="outlined"
              prepend-icon="fa-solid fa-camera"
              theme="light"
              class="mt-5"
              width="85vw"
              density="compact"
              accept="image/png, image/jpeg, image/bmp"
              :rules="[value => {
                return !value || !value.length || value[0].size < 5000000 || 'Maximale bestandsgrootte is 5MB';
              }]"
              @change="uploadImage"
              @click:append="tile.image = ''"
          >
              <template #append>
                <v-icon
                  @click="removeImage"
                  icon="fa-solid fa-trash-can"
                />
              </template>
          </v-file-input>
        </div>
        <v-text-field
          variant="underlined"
          density="compact"
          width="100%"
          name="tileName"
          label="Tegelnaam"
          color="secondary"
          v-model="this.tile.tilename"
          @focus="$event.target.select()"
        ></v-text-field>

        <div class="tile-size d-flex flex-row justify-center align-center w-100">
          <v-text-field
            variant="underlined"
            density="compact"
            name="tileWidth"
            label="Breedte"
            color="secondary"
            type="number"
            v-model="this.tile.width"
            @focus="$event.target.select()"
          ></v-text-field>
          <span class="mx-2">x</span>
          <v-text-field
            variant="underlined"
            density="compact"
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
            variant="underlined"
            density="compact"
            width="50%"
            name="amountOfBoxes"
            label="Aantal dozen"
            color="secondary"
            type="number"
            v-model="this.tile.amountOfBoxes"
            @input="CalculateTotalSquareMeters"
            @focus="$event.target.select()"
          ></v-text-field>
          <span class="mx-2">x</span>
          <v-text-field
            variant="underlined"
            density="compact"
            width="50%"
            name="squareMetersPerBox"
            label="m² per doos"
            color="secondary"
            type="number"
            v-model="this.tile.squareMetersPerBox"
            @input="CalculateTotalSquareMeters"
            @focus="$event.target.select()"
          ></v-text-field>
        </div>

        <v-text-field
          variant="underlined"
          density="compact"
          width="100%"
          name="totalSquareMeters"
          label="Totaal m²"
          color="secondary"
          v-model="this.tile.totalSquareMeters"
          @input="CalculatePriceTotal; CalculateAmountOfBoxes;"
          @focus="$event.target.select()"
        ></v-text-field>

        <div class="total-price d-flex flex-row align-start justify-space-between w-100 ga-4">
          <v-text-field
              variant="underlined"
              density="compact"
              prefix="€"
              type="number" min="0.00" max="10000.00" step="0.5"
              width="50%"
              name="pricePerSquareMeter"
              label="Prijs per m²"
              color="secondary"
              v-model="this.tile.pricePerSquareMeter"
              @focus="$event.target.select()"
              @input="CalculatePriceTotal"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            density="compact"
            color="secondary"
            width="50%"
            prefix="€"
            type="number"
            label="Totaalprijs"
            v-model="this.totalPrice"
            @input="CalculatePricePerSquareMeter"
            @focus="$event.target.select()"
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

.image {
  height: 10em;
  max-width: 80vw;
  max-height: 15em;
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
