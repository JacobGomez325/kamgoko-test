<template>
  <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center  z-50" v-if="open">
    <div class="absolute w-full h-full bg-gray-900  opacity-75" ></div>

    <div class="absolute max-h-screen" :class="maxWidth">
      <div class="container bg-white overflow-auto md:rounded">
        <div v-if="props.title "  class="px-4 py-2 leading-none flex justify-between items-center font-medium text-sm bg-white border-b select-none">
          <h3  class="font-bold text-lg">{{ props.title }}</h3>
          <div @click="close" class="text-5xl hover:text-gray-600 cursor-pointer">
            &#215;
          </div>
        </div>

        <div class="max-h-full px-4 py-4 relative">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue';
const open  = ref<boolean>(true)

const emits = defineEmits(['close'])
const props = defineProps({
  title: {
    type: String,
      
    },
    header: {
      type: String,
      required: false,
      default: "",
    },
    width: {
      type: String,
      default: "full",
      validator: (value:string) => ["xs", "sm", "md", "lg", "full"].indexOf(value) !== -1,
    },
})

// eslint-disable-next-line vue/return-in-computed-property
const maxWidth = computed(()=> {
  switch (props.width) {
    case "xs":
    return "max-w-lg";
    case "sm":
     return "max-w-xl";
    case "md":
    return "max-w-2xl";
    case "lg":
    return "max-w-3xl";
    case "full":
    return "max-w-full";
  }
})



const close = function() {
  open.value = false
  emits("close");
}

 
</script>
