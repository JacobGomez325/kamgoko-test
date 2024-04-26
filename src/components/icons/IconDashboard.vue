<template>
  <svg :class="props.color" :height="props.height" :width="props.width" viewBox="0 0 54 52" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="1" width="52" height="52" rx="6" fill="#F3F6F9" />
    <rect x="16.6666" y="14.1665" width="9.04167" height="9.04167" rx="1.5" fill="#0095E8" />
    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
      d="M28.2916 15.6665C28.2916 14.8381 28.9632 14.1665 29.7916 14.1665H35.8333C36.6617 14.1665 37.3333 14.8381 37.3333 15.6665V21.7082C37.3333 22.5366 36.6617 23.2082 35.8333 23.2082H29.7916C28.9632 23.2082 28.2916 22.5366 28.2916 21.7082V15.6665ZM16.6666 27.2915C16.6666 26.4631 17.3382 25.7915 18.1666 25.7915H24.2083C25.0367 25.7915 25.7083 26.4631 25.7083 27.2915V33.3332C25.7083 34.1616 25.0367 34.8332 24.2083 34.8332H18.1666C17.3382 34.8332 16.6666 34.1616 16.6666 33.3332V27.2915ZM29.7916 25.7915C28.9632 25.7915 28.2916 26.4631 28.2916 27.2915V33.3332C28.2916 34.1616 28.9632 34.8332 29.7916 34.8332H35.8333C36.6617 34.8332 37.3333 34.1616 37.3333 33.3332V27.2915C37.3333 26.4631 36.6617 25.7915 35.8333 25.7915H29.7916Z"
      fill="#0095E8" />
  </svg>



</template>

<script lang="ts" setup>
const props = defineProps({
  width: {
    type: String,
    default: '54px'
  },
  height: {
    type: String,
    default: '52px'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<style scoped></style>