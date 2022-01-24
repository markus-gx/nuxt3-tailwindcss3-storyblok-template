<template>
  <button
      class="py-2 px-8 text-black border-yellow-600 border uppercase tracking-wide text-xs transition-colors hover:bg-black hover:text-white hover:border-black">{{ label }}</button>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"

export default defineComponent({
  name: "CallToAction",
  props: {
    label: {
      type: String,
      default: ''
    },
    action: {
      type: Object,
      required: true
    }
  }
})
</script>
