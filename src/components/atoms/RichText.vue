<template>
  <div class="prose" v-html="renderedText"></div>
</template>

<script lang="ts" setup>
import useStoryApi from "~/composables/useStoryApi";

const props = defineProps({
  text: {
    type: Object,
    required: true
  }
})
const renderedText = useStoryApi().richTextResolver.render(props.text)
</script>
