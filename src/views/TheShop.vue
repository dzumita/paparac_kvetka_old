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
  name: 'TheShop',
  components: { AppPageWrapper, AppObjectLibrary }
}
</script>
