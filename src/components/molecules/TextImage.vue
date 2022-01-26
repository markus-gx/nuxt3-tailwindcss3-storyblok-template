<template>
  <section class="py-8 bg-gray-200 px-4 grid grid-cols-2 place-items-center">
    <rich-text :text="text"></rich-text>
    <responsive-image :image="image" clazz="max-h-[500px]" :breakpoints="[320,460,500]"></responsive-image>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import RichText from "~/components/atoms/RichText.vue";
import ResponsiveImage from "~/components/atoms/ResponsiveImage.vue";

export default defineComponent({
  name: "TextImage",
  components: {ResponsiveImage, RichText},
  props: {
    text: {
      type: Object,
      default: undefined
    },
    image: {
      type: Object,
      default: undefined
    }
  }
})
</script>
