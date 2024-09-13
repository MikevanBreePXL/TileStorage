<script>
import TopLogoBar from '../components/TopLogoBar.vue';

export default {
  name: 'TileDetails',
  props: {
    tileId: Number,
    tileName: String,
    tileLength: Number,
    tileWidth: Number,
    squareMetersPerBox: Number,
    amountOfBoxes: Number,
    totalSquareMeters: Number,
  },
  data() {
    return {
      tile: {
        id: this.tileId,
        name: this.tileName,
        length: this.tileLength,
        width: this.tileWidth,
        squareMetersPerBox: this.squareMetersPerBox,
        amountOfBoxes: this.amountOfBoxes,
        totalSquareMeters: this.totalSquareMeters,
      }
    };
  },
  components: {
    TopLogoBar,
  },
  methods: {
    fillFields() {
        // TODO: Fill fields with data from backend
    }
  }
};
</script>

<template>
    <TopLogoBar />
</template>