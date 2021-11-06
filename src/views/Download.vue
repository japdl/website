<template>
  <div class="flex flex-col justify-center items-center">
    <h1>Types de programme:</h1>
    <div
      class="flex justify-center text-center w-full h-full m-4 p-10 shadow-md"
    >
      <div class="bg-red-500 w-full flex flex-col justify-center p-5">
        <h2>CLI</h2>
        <h3>(dans un terminal)</h3>
        <a
          class="text-red-800 font-bold hover:underline"
          target="_blank"
          href="//github.com/Seysa/japdl/releases"
          >Lien</a
        >
      </div>
      <div class="bg-blue-500 w-full flex flex-col justify-center p-5">
        <h2>GUI</h2>
        <h3>(application graphique)</h3>
        <a
          class="text-red-800 font-bold hover:underline"
          target="_blank"
          href="//github.com/Seysa/japdl-gui/releases"
          >Lien</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
