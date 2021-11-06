<template>
  <NavBar :routes="routes"/>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";

const routes = [
  {
    name: "Accueil",
    path: "/home",
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
