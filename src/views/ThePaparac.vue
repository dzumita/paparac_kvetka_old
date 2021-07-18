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
import AppObjectLibrary from '@/components/object/AppObjectLibrary.vue'
import AppFactory from '@/components/object/AppFactory.vue'

export default {
  name: 'ThePaparac',
  components: { AppPageWrapper, AppObjectLibrary, AppFactory }
}
</script>
