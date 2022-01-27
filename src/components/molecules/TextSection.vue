<template>
<section class="grid md:grid-cols-2 place-items-center">
  <h2 class="text-xl">{{title}}</h2>
  <rich-text :text="text"></rich-text>
</section>
</template>

<script lang="ts" setup>
import RichText from '~/components/atoms/RichText.vue'

const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: Object,
  }
})
</script>
