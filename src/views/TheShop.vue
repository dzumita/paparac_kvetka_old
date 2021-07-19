<template>
  <AppPageWrapper>
    <template #content>
      <AppObjectLibrary :objects="inventory"/>
      <AppObjectLibrary :objects="inventory"/>
    </template>
  </AppPageWrapper>
</template>

<script lang="ts">
import AppPageWrapper from '@/components/AppPageWrapper.vue'
import AppObjectLibrary from '@/components/object/AppObjectLibrary.vue'

export default {
  name: 'TheShop',
  components: { AppPageWrapper, AppObjectLibrary },
  setup () {
    const inventory = [
      { id: 0, name: 'empty' },
      { id: 1, name: 'antiempty' },
      { id: 2, name: 'dirty' },
      { id: 3, name: 'water' },
      { id: 4, name: 'fire' },
      { id: 5, name: 'firid' },
      { id: 6, name: 'watenid' },
      { id: 7, name: 'strumenid' },
      { id: 8, name: 'energy' },
      { id: 9, name: 'energyClass' },
      { id: 10, name: 'dirtyClass' }
    ]

    return { inventory }
  }
}
</script>
