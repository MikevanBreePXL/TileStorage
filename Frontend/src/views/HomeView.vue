<script>
import CustomTileCard from '../components/HomeView/CustomTileCard.vue';
import NewTileCard from '../components/HomeView/NewTileCard.vue'; 
import TileInfoCard from '../components/HomeView/TileInfoCard.vue';
import TopLogoBar from '../components/TopLogoBar.vue';
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
        TopLogoBar,
        TileInfoCard,
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
        <TopLogoBar />
        <div class="list d-flex flex-column ga-2 justify-center align-center">
            <NewTileCard :to="{ name: 'TileDetails', params: { tileId: 'new' }}" />
            <TileInfoCard />
            <div v-for="tile in this.tiles" :key="tile.id">
                <RouterLink :to="{ name: 'TileDetails', params: { tileId: tile.id }}">
                    <CustomTileCard height="100%" :name="tile.tilename" :tileWidth="tile.width" :tileLength="tile.length" :amountOfBoxes="tile.amountOfBoxes" :squareMetersPerBox="((Math.round(100 * tile.squareMetersPerBox)) / 100.0)" :totalSquareMeters="tile.totalSquareMeters.toFixed(2)" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
}
</style>
