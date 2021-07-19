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
  props: {
    inventory: {
      type: Array,
      required: true
    }
  }
}
</script>
