<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="home">
        <img src="../assets/TegelsLogo.png" alt="Logo" class="logo mb-6">
        <v-btn color="primary" size="large" rounded="xl" class="my-2" to="/home">Enter</v-btn>
        <v-btn color="secondary" size="large" rounded="xl" to="/about">About</v-btn>
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
