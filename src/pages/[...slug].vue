<template>
  <CmsPage :body="state.story.content.body" :header="state.story.content.header"/>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import useCmsPage from "~/composables/useCmsPage";
import CmsPage from "~/components/layout/CmsPage.vue";

export default defineComponent({
  name: 'Page',
  components: {CmsPage},
  async setup(){
    return await useCmsPage()
  },
  mounted() {
    useStoryBridge(this.state.story.id, (story) => (this.state.story = story))
  }
})
</script>
