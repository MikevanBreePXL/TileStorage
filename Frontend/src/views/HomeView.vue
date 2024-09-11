<script setup>
    import HelloWorld from '../components/HelloWorld.vue';
</script>

<template>
    <div class="home">
        <img src="../assets/TegelsLogo.png" alt="Logo" class="logo">
        <v-btn color="primary" size="large" rounded="xl">Enter</v-btn>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.logo {
    max-width: 80vw;
    height: auto;
    margin-bottom: 3rem;
}
</style>
