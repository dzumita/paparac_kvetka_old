<template>
  <AppPageWrapper>
    <template #content>
      <p>Version: 0.3.0</p>
    </template>
  </AppPageWrapper>
</template>

<script lang="ts">
import AppPageWrapper from '@/components/AppPageWrapper.vue'

export default {
  name: 'TheSettings',
  components: { AppPageWrapper }
}
</script>

<style scoped>
  * + *:not(:first-child) {
    margin-top: 0.5rem;
  }
</style>
