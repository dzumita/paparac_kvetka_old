<template>
  <AppPageWrapper>
    <template #content>
      <AppObjectLibrary/>
      <AppObjectLibrary/>
    </template>
  </AppPageWrapper>
</template>

<script lang="ts">
import AppPageWrapper from '@/components/AppPageWrapper.vue'
import AppObjectLibrary from '@/components/AppObjectLibrary.vue'

export default {
  name: 'AppPaparac',
  components: { AppPageWrapper, AppObjectLibrary }
}
</script>

<style scoped>
  * + *:not(:first-child) {
      margin-top: 0.5rem;
  }
</style>
