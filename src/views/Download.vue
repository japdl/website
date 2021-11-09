<template>
  <div
    class="
      flex flex-col
      justify-center
      items-center
      bg-gray-700
      rounded-xl
      m-4
      p-4
    "
  >
    <h1 class="text-white text-2xl">Types de programme:</h1>
    <div
      class="
        flex
        justify-center
        text-center
        w-full
        h-full
        m-4
        p-10
        gap-4
        text-white
      "
    >
      <div class="container">
        <h2>CLI</h2>
        <h3>(dans un terminal)</h3>
        <Link
          text="Lien pour le télécharger"
          link="github.com/Seysa/japdl/releases"
        />
      </div>
      <div class="container">
        <h2>GUI</h2>
        <h3>(application graphique)</h3>
        <Link
          text="Lien pour le télécharger"
          link="github.com/Seysa/japdl-gui/releases"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Link from "@/components/Link.vue";
</script>

<style scoped>
.container {
  @apply bg-gray-900 w-full flex items-center flex-col p-5 rounded-lg shadow-xl;
}
</style>
