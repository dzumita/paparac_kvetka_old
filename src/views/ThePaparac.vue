<template>
  <AppPageWrapper grid-rows="1fr 3fr">
    <template #content>
      <AppFactory text="merge" img="paparac" />
      <AppObjectLibrary :objects="inventory"/>
    </template>
  </AppPageWrapper>
</template>

<script lang="ts">
import AppPageWrapper from '@/components/AppPageWrapper.vue'
import AppObjectLibrary from '@/components/object/AppObjectLibrary.vue'
import AppFactory from '@/components/object/AppFactory.vue'

export default {
  name: 'ThePaparac',
  components: { AppPageWrapper, AppObjectLibrary, AppFactory },
  setup () {
    const inventory = [
      { id: 0, name: 'empty' },
      { id: 1, name: 'antiempty' },
      { id: 2, name: 'dirty' },
      { id: 3, name: 'dirtyClass' },
      { id: 4, name: 'dust' },
      { id: 5, name: 'earid' },
      { id: 6, name: 'empty' },
      { id: 7, name: 'energy' },
      { id: 8, name: 'energyClass' },
      { id: 9, name: 'fire' },
      { id: 10, name: 'fireClass' },
      { id: 11, name: 'firid' },
      { id: 12, name: 'sand' },
      { id: 13, name: 'stone' },
      { id: 14, name: 'strumenid' },
      { id: 15, name: 'unknow' },
      { id: 16, name: 'watenid' },
      { id: 17, name: 'water' },
      { id: 18, name: 'waterClass' }
    ]

    return { inventory }
  }
}
</script>
