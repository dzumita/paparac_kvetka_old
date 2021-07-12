<template>
  <div class="object">
    <img class="object-image" src="../assets/images/furnace.png" alt="furnace">
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppObject'
}
</script>

<style scoped>
  .object {
    border:        2px solid var(--border);
    border-radius: var(--borderRadius);

    width:  2.5rem;
    height: 2.5rem;

    overflow: hidden;
  }

  .object-image {
    width:  100%;
    height: 100%;
  }
</style>
