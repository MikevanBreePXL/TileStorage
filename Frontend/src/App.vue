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
  <RouterView />
</template>