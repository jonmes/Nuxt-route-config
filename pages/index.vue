<template>
  <section class="dark:bg-gray-700 dark:text-white">
    <div class="flex flex-col items-center dark:bg-black dark:text-white">
      <logo />
      <h1 class="title">NUXT</h1>
      <h2 class="subtitle">Starter for CodeSandBox</h2>
      <div class="links">
        <div class="flex space-x-10">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="bg-green-400 rounded-lg text-2xl px-4 py-2 flex"
            >Documentation
            <icon-link />
          </a>
          <NuxtLink
            to="#anchor1"
            class="bg-green-400 rounded-lg text-2xl px-4 py-2"
            >Anchor1</NuxtLink
          >
          <NuxtLink
            :to="{ path: '/', hash: '#anchor2' }"
            class="bg-green-400 rounded-lg text-2xl px-4 py-2"
            >Anchor2</NuxtLink
          >
          <button
            class="bg-gray-400 rounded-lg px-4 py-2 text-2xl"
            @click="$colorMode.preference == 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
          >
            Darkmode
          </button>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="anchor1" class="anchor">anchor1</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="anchor2" class="anchor">anchor2</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </section>
</template>

<script setup>
import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";

</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #526488;
  letter-spacing: 1px;
  font-size: 6em;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.anchor {
  padding-top: 60px;
}
</style>
