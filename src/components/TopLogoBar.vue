<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="top-bar d-flex justify-center w-vw bg-white">
        <RouterLink to="/"><img src="../assets/TegelsLogo.png" alt="Logo" class="logo my-5 flex justify-center"></RouterLink>
    </div>
    <div class="top-bar-gradient mb-2">
    </div>
    <RouterLink 
        to="/settings"
        style="position: absolute; right: 0.5em; top: 0.5em; color: white; cursor: pointer;"
    >
        <v-icon
            icon="fa-solid fa-cog"
            color="black"
            size="1.5em"
        />
    </RouterLink>
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
.logo {
    max-width: 70vw;
    height: auto;
}
</style>
