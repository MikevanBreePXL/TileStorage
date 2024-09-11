<script>
import { useTilesStore } from '../stores/TileStore';

export default {
    name: 'HomeView',
    data() {
        return {
            store: useTilesStore(),
        }
    },
    computed: {
        tiles() {
            return this.$store.tiles
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
            <div v-for="tile in store.tiles" :key="tile.id" class="card">
                <p>{{ tile.name }}</p>
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
