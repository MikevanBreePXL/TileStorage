<script setup lang="ts">
import TopLogoBar from '../components/TopLogoBar.vue';
import AnimatedFrameworks from '../components/AnimatedFrameworks.vue';
</script>

<template>
  <topLogoBar />
    <div class="about mb-2">
        <h1>About me</h1>
    </div>

    <AnimatedFrameworks />
</template>

<style scoped>
.about {
  text-align: center;
  margin: 1em;
}
</style>