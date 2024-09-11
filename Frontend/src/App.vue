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
nav {
  /* Fixate nav bar to top of viewport */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0.5rem;
}
nav * {
  margin-inline: 1em;
}
</style>
