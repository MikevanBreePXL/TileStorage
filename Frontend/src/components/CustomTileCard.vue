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
    },
}
</script>

<template>
    <v-card width="90vw" height="100%" class="py-2 d-flex flex-row">
        <div class="flex-col titles">
            <v-card-title primary-title class="name my-0 py-0 pr-0">
                {{ name }}
            </v-card-title>
            <v-card-title secordary-title class="size my-0 py-0">
                {{ tileWidth }}x{{ tileLength }}
            </v-card-title>
        </div>
        <v-card-text class="text-center">
            <v-row>
                <v-col height="100" cols="4"><span v-if="amountOfBoxes != null">{{  amountOfBoxes }}x</span></v-col>
                <v-col cols="4"><span v-if="squareMetersPerBox != null">{{ squareMetersPerBox }}m<sup>2</sup></span></v-col>
                <v-col cols="4"><span v-if="totalSquareMeters != null">{{ totalSquareMeters }}m<sup>2</sup></span></v-col>
            </v-row>
        </v-card-text> 
    </v-card>
</template>

<style scoped>
p {
    font-family: 'Montserrat', sans-serif;
    font-size: 150%;
}

.wrapper {
    width: fit-content;
    position: relative;
    max-width: 100%; /* Ensures wrapping within the grid system */
    line-height: 1.175;
    
}
.name {
    display: block;
}
.titles {
    width: 50%;
}
.size {
    font-family: 'montserrat', sans-serif;
    font-weight: 300;
}
</style>
