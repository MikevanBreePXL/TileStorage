<script>
import CustomTileCard from '../components/CustomTileCard.vue';
import NewTileCard from '../components/NewTileCard.vue'; 
import { useTilesStore } from '../stores/TileStore';

export default {
    name: 'HomeView',
    data() {
        return {
            store: useTilesStore(),
        }
    },
    components: {
        NewTileCard,
        CustomTileCard,
    },
    mounted() {
        // this.fetchTiles();
    },
    computed: {
        tiles() {
            return this.store.getTiles;
        }
    },
    methods: {
        async fetchTiles() {
            const backend_url = 'http://185.92.69.118:50160/tiles';
            const response = await fetch(backend_url);
            const tiles_list = await response.json();

            console.log("Tiles retrieved:");
            console.log(tiles_list);
        }
    }
}
</script>

<template>
    <div class="home">
        <div class="top-bar d-flex justify-center w-screen bg-white">
            <img src="../assets/TegelsLogo.png" alt="Logo" class="logo my-5 flex justify-center">
        </div>
        <div class="top-bar-gradient mb-5">
        </div>
        <div class="list d-flex flex-column ga-2 justify-center align-center">
            <NewTileCard />
            <div v-for="tile in this.tiles" :key="tile.id">
                <CustomTileCard height="100%" :name="tile.name" :tileWidth="tile.width" :tileLength="tile.length" :squareMetersPerBox="tile.squareMetersPerBox" :amountPerBox="tile.amountPerBox" :totalSquareMeters="tile.totalSquareMeters" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.top-bar {
    width: 100dvw;
}
.top-bar-gradient {
    height: 0.5em;
    background: linear-gradient(to bottom, white, transparent);
    margin-top: -1px;
}
.home {
    display: flex;
    flex-direction: column;
}
.logo {
    max-width: 70vw;
    height: auto;
}
</style>
