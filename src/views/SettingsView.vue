<script setup>
import { useTilesStore } from '../stores/TileStore';
const store = useTilesStore();
const export_data = () => {
    const data = store.exportData();
    console.log('data', data);
    let download = document.createElement('a');
    download.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
    download.download = 'Tegels.json';
    download.click();
}
</script>

<template>
    <div class="home ga-3">
        <img src="../assets/TegelsLogo.png" alt="Logo" class="logo mb-3">
        <v-btn to="/" color="primary" size="large" rounded="xl">Home</v-btn>
        <v-btn to="/about" color="#eee" size="large" rounded="xl">Over deze website</v-btn>
        <v-btn @click="export_data" variant="outlined" color="warning" size="large" rounded="xl">Exporteer data</v-btn>
    </div>
</template>

<style scoped>
.home {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.logo {
    max-width: 80vw;
    height: auto;
}
</style>
