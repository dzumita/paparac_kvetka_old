<template>
  <AppPageWrapper>
    <template #content>
      <AppFactory text="Alloy" img="furnace" alt="furnace"/>
      <AppObjectLibrary/>
    </template>
  </AppPageWrapper>
</template>

<script lang="ts">
import AppPageWrapper from '@/components/AppPageWrapper.vue'
import AppObjectLibrary from '@/components/AppObjectLibrary.vue'
import AppFactory from '@/components/AppFactory.vue'

export default {
  name: 'TheFurnace',
  components: { AppPageWrapper, AppObjectLibrary, AppFactory }
}
</script>
