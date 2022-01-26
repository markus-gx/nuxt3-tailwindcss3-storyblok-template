<template>
  <div class="prose" v-html="renderedText">
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"

export default defineComponent({
  name: "RichText",
  props: {
    text: {
      type: Object,
      required: true
    }
  },
  computed: {
    renderedText(){
      return this.$storyapi.richTextResolver.render(this.text)
    }
  }
})
</script>
