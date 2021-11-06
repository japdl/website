<template>
  <nav class="flex justify-center items-center gap-5">
    <router-link
      v-for="route in props.routes"
      :key="route.name"
      :to="route.path"
      class="p-4 rounded-md hover:bg-green-300 hover:text-white text-xl"
      >{{ route.name }}
    </router-link>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
const props = defineProps<{
  routes: { name: string; path: string }[];
}>();
</script>

<style scoped>
nav a {
}
nav a.router-link-exact-active {
  @apply text-green-500 hover:text-green-700;
}
</style>
