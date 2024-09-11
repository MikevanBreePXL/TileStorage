<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>  
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
nav * {
  margin-inline: 1em;
}
</style>
