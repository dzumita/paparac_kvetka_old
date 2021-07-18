<template>
  <AppPageWrapper>
    <template #content>
      <AppFactory text="alloy" img="furnace" alt="furnace"/>
      <AppObjectLibrary/>
    </template>
  </AppPageWrapper>
</template>

<script lang="ts">
import AppPageWrapper from '@/components/AppPageWrapper.vue'
import AppObjectLibrary from '@/components/object/AppObjectLibrary.vue'
import AppFactory from '@/components/object/AppFactory.vue'

export default {
  name: 'TheFurnace',
  components: { AppPageWrapper, AppObjectLibrary, AppFactory }
}
</script>
