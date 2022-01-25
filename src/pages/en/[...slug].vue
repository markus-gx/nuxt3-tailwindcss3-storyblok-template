<template>
  <CmsPage :header="state.story.content.header" :body="state.story.content.body"/>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "@vue/runtime-core";
import useStoryBridge from "~/composables/useStoryBridge";
import useCmsPage from "~/composables/useCmsPage";
import CmsPage from "~/components/organisms/CmsPage.vue";

export default defineComponent({
  components: {
    CmsPage
  },
  async setup(){
    return await useCmsPage("en")
  },
  mounted() {
    useStoryBridge(this.state.story.id, (story) => (this.state.story = story))
  }
})
</script>
