<script>
export default {
    name: 'CustomTileCard',
    props: {
        name: String,
        tileWidth: Number,
        tileLength: Number,
        squareMetersPerBox: Number,
        amountOfBoxes: Number,
        totalSquareMeters: Number,
        totalPrice: Number,
        image: String,
    }
}
</script>

<template>
  <v-card class="py-0 d-flex flex-row justify-center align-center">
    <template #prepend>
        <v-img
            class="ml-4"
            :src="image"
            max-width="50"
            width="50"
            height="100"
            max-height="12em"
            alt="Thumbnail"
          >
          <template v-slot:placeholder>
            <v-img
                class="mx-1 place-holder-image"
                src="https://www.svgrepo.com/show/340721/no-image.svg"
            ></v-img>
          </template>
        </v-img>
    </template>
    <div class="d-flex flex-column w-80">
      <v-card-title class="pb-0 pt-2 text-primary-darken-1" primary-title>
        <div class=" d-flex flex-row justify-space-between align-center">
          <span id="tile-name">{{ name }}</span>
          <span v-if="!Number.isNaN(totalPrice)">€ {{ totalPrice }}</span>
          <span v-else><v-icon icon="fa-solid fa-ban" size="sm" class="pb-2"></v-icon></span>
        </div>
      </v-card-title>
      <v-card-text class="text-center card-text pb-0">
        <div class="d-flex flex-row justify-space-between align-center">
          <v-col class="px-0 pt-3 align-self-start text-start text-secondary tracking-normal" cols="4"><p>{{ tileWidth }} x {{ tileLength }}</p></v-col>
          <v-col class="px-0 text-end text-primary" cols="2"><span v-if="amountOfBoxes != null">{{  amountOfBoxes }}x</span></v-col>
          <v-col class="px-0 text-primary-darken-1" cols="3"><span v-if="squareMetersPerBox != null">{{ squareMetersPerBox }}m<sup>2</sup></span></v-col>
          <v-col class="px-0 text-primary-darken-1" cols="3"><span v-if="totalSquareMeters != null">{{ totalSquareMeters }} m<sup>2</sup></span></v-col>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<style scoped>
.w-80 {
  width: 80%;
  max-width: 80%;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 150%;
}
span {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 115%;
}

#tile-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
}

.place-holder-image {
  display: block;
  margin-block: 55%;
}

.card-text {
  margin-top: -0.8em;
  letter-spacing: 0;
}
</style>
