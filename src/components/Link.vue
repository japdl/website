<template>
  <div class="flex justify-center">
    <a
      class="text-red-800 font-bold hover:underline hover:text-red-500"
      target="_blank"
      :href="'//' + props.link"
      >{{ props.text }}</a
    >
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
const props = defineProps<{
  link: string;
  text: string;
}>();
</script>
