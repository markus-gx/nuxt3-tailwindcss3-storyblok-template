<template>
  <div id="page">
    <header>
      <navigation></navigation>
      <component v-for="blok in state.story.content.header" :key="blok._uid"
                 v-bind="{...blok}"
                 v-editable="blok"
                 :is="blok.component"></component>
    </header>
    <main>
      <component v-for="blok in state.story.content.body" :key="blok._uid"
                 v-bind="{...blok}"
                 v-editable="blok"
                 :is="blok.component"></component>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "@vue/runtime-core";
import useStoryApi from "~/composables/useStoryApi";
import {useRoute} from "vue-router";
import CallToAction from "~/components/atoms/CallToAction.vue";
import ImageStage from "~/components/atoms/ImageStage.vue";
import useStoryBridge from "~/composables/useStoryBridge";
import Navigation from "~/components/atoms/Navigation.vue";
import TextSection from "~/components/molecules/TextSection.vue";

export default defineComponent({
  name: 'Page',
  components: {
    Navigation,
    CallToAction, ImageStage, TextSection
  },
  async setup(){
    const route = useRoute() //this.$route
    const storyapi = useStoryApi()
    const slugArray = route.params.slug as string[]
    const slug = route.params.slug ? slugArray.join('/') : 'home'
    const {data} = await storyapi.get(`cdn/stories/${slug}`, {version: 'draft'})

    const state = reactive({story: data.story})
    return {
      state,
      useStoryBridge
    }
  },
  mounted(){
    useStoryBridge(this.state.story.id, (story) => (this.state.story = story))
  }
})
</script>
