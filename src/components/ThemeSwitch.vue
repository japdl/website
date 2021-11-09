<template>
  <div class="flex items-center justify-center">
    <div class="flex justify-end items-center space-x-2">
      <span
        class="text-xs"
        :class="{
          'font-extralight': theme != 'light',
          'font-semibold': theme == 'light',
        }"
        >Light
      </span>
      <div>
        <input
          type="checkbox"
          ref="checkbox"
          id="checkbox"
          class="hidden"
          @click="themeSwitch"
        />
        <label for="checkbox" class="cursor-pointer">
          <div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p2">
            <div
              class="w-4 h-4 center bg-red-500 rounded-full shadow"
              :class="{ selected: theme == 'dark' }"
            ></div>
          </div>
        </label>
      </div>
      <span
        class="text-xs"
        :class="{
          'font-extralight': theme != 'dark',
          'font-semibold': theme == 'dark',
        }"
        >Dark</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { choosen, switchTheme } from "@/utils/darkmode";
import { ref } from "vue";

const theme = ref(choosen());
const themeSwitch = () => switchTheme(theme);
</script>

<style scoped>
html.dark + .selected {
  background-color: white;
  transform: translateX(24px);
  transition: transform 0.3s linear;
}
</style>
