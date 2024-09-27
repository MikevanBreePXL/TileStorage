<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="home">
        <img src="../assets/TegelsLogo.png" alt="Logo" class="logo mb-6">
        <v-btn to="/" color="primary" size="large" rounded="xl" class="my-2">Home</v-btn>
        <v-btn to="/about" color="#eee" size="large" rounded="xl">Over deze website</v-btn>
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
