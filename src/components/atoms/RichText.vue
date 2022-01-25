<template>
  <div v-html="renderedText" class="prose">
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import useStoryApi from "~/composables/useStoryApi";

export default defineComponent({
  name: "RichText",
  setup(){
    return {
      storyapi: useStoryApi()
    }
  },
  props: {
    text: {
      type: Object,
      default: undefined
    }
  },
  computed:{
    renderedText(){
      return this.storyapi.richTextResolver.render(this.text)
    }
  }
})
</script>
