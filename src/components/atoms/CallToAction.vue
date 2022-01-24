<template>
  <button
      v-editable="blok"
      class="py-2 px-8 text-black border-yellow-600 border uppercase tracking-wide text-xs transition-colors hover:bg-black hover:text-white hover:border-black">{{ blok.label }}</button>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"

export default defineComponent({
  name: "CallToAction",
  props: {
    blok: {
      type: Object
    }
  }
})
</script>
