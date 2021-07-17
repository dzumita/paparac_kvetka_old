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
    background:    transparent;
    border:        var(--border);
    border-radius: var(--borderRadius);

    font-size:   var(--buttonFontSize);
    font-family: var(--mainFont);
    color:       var(--activeColor);

    width:   100%;
    padding: calc(var(--padding) / 2) var(--padding);

    cursor: pointer;

    transition: var(--transition);
  }

  .button:active {
    transform: var(--transformActive);
  }
</style>
