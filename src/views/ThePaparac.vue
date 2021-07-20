<template>
  <AppPageWrapper grid-rows="4fr 10fr">
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
  props: {
    inventory: {
      type: Array,
      required: true
    }
  }
}
</script>
