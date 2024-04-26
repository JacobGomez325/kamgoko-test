<template>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" :class="props.color" :height="props.height" :width="props.width"  xmlns="http://www.w3.org/2000/svg"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  width: {
    type: String,
    default: '1em'
  },
  height: {
    type: String,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<style scoped></style>