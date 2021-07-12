<template>
  <div class="app-page">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppPageWrapper'
}
</script>

<style scoped>
  .app-page {
    width:   100%;
    padding: var(--padding);

    display: grid;

    overflow: auto;
  }

  .app-page-img {
    width: 5rem;
  }

  * + *:not(:first-child) {
      margin-top: 0.5rem;
  }
</style>
