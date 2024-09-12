<script>
import { useTilesStore } from '../stores/TileStore';

export default {
    name: 'HomeView',
    data() {
        return {
            store: useTilesStore(),
        }
    },
    mounted() {
        this.fetchTiles();
    },
    computed: {
        tiles() {
            return this.store.tiles;
        }
    },
    methods: {
        async fetchTiles() {
            const backend_url = 'https://tilestorage.onrender.com/tiles';
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
        <div class="top-bar-gradient">
        </div>

        <div class="list d-flex flex-column justify-center align-center">
            <div v-for="tile in store.tiles" :key="tile.id" class="text-white">
                <p class="text-white">{{ tile.name }}</p>
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
