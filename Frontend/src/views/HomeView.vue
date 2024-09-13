<script>
import CustomTileCard from '../components/CustomTileCard.vue';
import NewTileCard from '../components/NewTileCard.vue'; 
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
            <div v-for="tile in this.tiles" :key="tile.id">
                <RouterLink :to="{ name: 'TileDetails', params: { tileId: tile.id }}">
                    <CustomTileCard height="100%" :name="tile.tilename" :tileWidth="tile.width" :tileLength="tile.length" :squareMetersPerBox="tile.squareMetersPerBox" :amountPerBox="tile.amountPerBox" :totalSquareMeters="tile.totalSquareMeters" />
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
