<template>
  <button class="button">{{text}}</button>
</template>

<script lang="ts">
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .button {
    background: transparent;
    border: 2px solid var(--activeColor);
    border-radius: var(--borderRadius);

    font-family: var(--mainFont);
    color: var(--activeColor);

    width: 100%;
    height: 1.5rem;

    cursor: pointer;
  }

  .button:active {
    transform: scale(0.90);
  }
</style>
