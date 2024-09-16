<script>
import { useTilesStore } from './stores/TileStore';

export default {
  name: 'App',
  data() {
    return {
      store: useTilesStore(),
      isOnline: navigator.onLine,
    }
  },
  mounted() {
    this.isOnline = navigator.onLine
    window.addEventListener('online', () => this.isOnline = true)
    window.addEventListener('offline', () => this.isOnline = false)
  },
  beforeUnmount() {
    window.removeEventListener('online', () => this.isOnline = true)
    window.removeEventListener('offline', () => this.isOnline = false)
  },
  created: function () {
    this.store.loadData();
  }
}
</script>

<template>
  <RouterView v-if="isOnline" />
  <div v-else class="h-screen d-flex flex-column justify-center align-center">
    <h1 class="text-orange-darken-3">You are offline</h1>
    <v-progress-circular color="warning" indeterminate class="mt-4"></v-progress-circular>
  </div>
</template>