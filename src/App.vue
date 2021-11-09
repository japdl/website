<template>
  <div id="top" class="flex justify-around dark:bg-gray-200">
    <div id="balance"></div>
    <NavBar :routes="routes" />
    <ThemeSwitch />
  </div>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import ThemeSwitch from "./components/ThemeSwitch.vue";

const routes = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "Téléchargement",
    path: "/download",
  },
];
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
