<template>
  <div class="object-library">
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppObjectLibrary'
}
</script>

<style scoped>
  .object-library {
    border:        2px solid var(--border);
    border-radius: var(--borderRadius);

    width:   100%;
    height:  100%;
    padding: var(--padding);

    display:        grid;
    gap:            var(--padding);
    place-content:  start;
    grid-auto-flow: column;
  }
</style>
