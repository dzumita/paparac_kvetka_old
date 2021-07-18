<template>
  <AppPageWrapper>
    <template #content>
      <AppFactory text="merge" img="paparac" alt="fern"/>
      <AppObjectLibrary/>
    </template>
  </AppPageWrapper>
</template>

<script lang="ts">
import AppPageWrapper from '@/components/AppPageWrapper.vue'
import AppObjectLibrary from '@/components/AppObjectLibrary.vue'
import AppFactory from '@/components/AppFactory.vue'

export default {
  name: 'ThePaparac',
  components: { AppPageWrapper, AppObjectLibrary, AppFactory }
}
</script>
