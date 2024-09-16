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
    <v-card width="90vw" height="100%" class="py-0 d-flex flex-column">
        <v-card-title class="pb-0 pt-2" primary-title>
            {{ name }}
        </v-card-title>
        <v-card-text class="text-center card-text pb-1">
            <div class="d-flex flex-row justify-space-between align-center">
                <v-col class="px-0 justify-start text-start" cols="4"><p>{{ tileWidth }}x{{ tileLength }}</p></v-col>
                <v-col class="px-0 text-end" cols="2"><span v-if="amountOfBoxes != null">{{  amountOfBoxes }}x</span></v-col>
                <v-col class="px-0" cols="3"><span v-if="squareMetersPerBox != null">{{ squareMetersPerBox }}m<sup>2</sup></span></v-col>
                <v-col class="px-0" cols="3"><span v-if="totalSquareMeters != null">{{ totalSquareMeters }}m<sup>2</sup></span></v-col>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped>
p {
    font-family: 'Montserrat', sans-serif;
    font-size: 150%;
}
span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 125%;
}
.card-text {
    margin-top: -0.8em;
}
</style>
