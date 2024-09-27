<script setup lang="ts">
import TopLogoBar from '../components/TopLogoBar.vue';
import AnimatedFrameworks from '../components/AnimatedFrameworks.vue';
</script>

<template>
  <topLogoBar />
    <div class="about mb-2 mx-1">
        <h1>Over deze website</h1>
    </div>

    <AnimatedFrameworks />
</template>

<style scoped>
.about {
  text-align: center;
  font-size: 80%;
}
</style>