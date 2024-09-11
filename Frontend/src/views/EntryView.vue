<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="home">
        <img src="../assets/TegelsLogo.png" alt="Logo" class="logo mb-6">
        <RouterLink to="/home"><v-btn color="primary" size="large" rounded="xl" class="my-2">Enter</v-btn></RouterLink>
        <RouterLink to="/about"><v-btn color="secondary" size="large" rounded="xl">About</v-btn></RouterLink>
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
