<template>
  <AppPageWrapper>
    <template #content>
      <AppObjectLibrary/>
    </template>
  </AppPageWrapper>
</template>

<script lang="ts">
import AppPageWrapper from '@/components/AppPageWrapper.vue'
import AppObjectLibrary from '@/components/AppObjectLibrary.vue'

export default {
  name: 'AppEncyclopedia',
  components: { AppPageWrapper, AppObjectLibrary }
}
</script>

<style scoped>

</style>
