<template>
  <nav class="flex justify-center">
    <p class="flex space-x-2 items-center">
      <span title="precedent" class="bg-gray-200 px-2 rounded-full text-xl font-semibold cursor-pointer" @click="prev"> ‹ </span>
      <span> {{ props.current }} - sur  {{ props.total  }} </span>
      <span title="suivant" class="bg-gray-200 px-2 rounded-full text-xl font-semibold cursor-pointer" @click="next"> › </span>
    </p>
  </nav>
</template>

<script setup lang="ts">
  const emits = defineEmits(['prev', 'next'])
  const props = defineProps({
    current:{
      type: Number,
      required: true
    },
    total:{
      type: Number,
      required: true
    }
  })

  const prev = ()=> {
    emits('prev')
  }
  const next = ()=> {
    emits('next')
  }

</script>

<style scoped>

</style>