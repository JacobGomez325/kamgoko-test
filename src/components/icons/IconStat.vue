<template>

  <svg :class="props.color" :height="props.height" :width="props.width" viewBox="0 0 32 31" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.3" x="17.2915" y="5.16669" width="3.875" height="20.6667" rx="1.9375" fill="#B5B5C3" />
    <rect x="10.8335" y="11.625" width="3.875" height="14.2083" rx="1.9375" fill="#B5B5C3" />
    <rect x="23.75" y="14.2084" width="3.875" height="11.625" rx="1.9375" fill="#B5B5C3" />
    <rect x="4.375" y="16.7917" width="3.875" height="9.04166" rx="1.9375" fill="#B5B5C3" />
  </svg>


</template>

<script lang="ts" setup>
const props = defineProps({
  width: {
    type: String,
    default: '32px'
  },
  height: {
    type: String,
    default: '31px'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<style scoped></style>