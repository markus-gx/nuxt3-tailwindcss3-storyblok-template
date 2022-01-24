<template>
  <nav class="fixed flex gap-4 z-10 text-gray-300 p-4 items-center justify-center w-full">
    <NuxtLink class="border-b border-transparent hover:border-yellow-600"
              :to="item.link.cached_url" v-for="item in nav" :key="item._uid">{{item.name}}</NuxtLink>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import useSettings from "~/composables/useSettings";

export default defineComponent({
  name: "Navigation",
  setup(){
    const {nav} = useSettings()
    return {
      nav
    }
  }
})
</script>
