<template>
  <div id="page">
    <header>
      <navigation></navigation>
      <component v-for="blok in state.story.content.header" :key="blok._uid"
                 v-editable="blok"
                 :is="blok.component"
                 v-bind="{...blok}"></component>
    </header>
    <main>
      <component v-for="blok in state.story.content.body" :key="blok._uid"
                 v-editable="blok"
                 :is="blok.component"
                 v-bind="{...blok}"
      ></component>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "@vue/runtime-core";
import {useRoute, useRouter} from "vue-router";
import {reactive} from "@vue/runtime-core";
import useStoryApi from "~/composables/useStoryApi";
import useStoryBridge from "~/composables/useStoryBridge";
import CallToAction from "~/components/atoms/CallToAction.vue";
import ImageStage from "~/components/atoms/ImageStage.vue";
import Navigation from "~/components/atoms/Navigation.vue";
import OneToRuleThemAll from "~/components/organisms/OneToRuleThemAll.vue";

export default defineComponent({
  components: {
    Navigation,
    CallToAction, ImageStage, OneToRuleThemAll
  },
  async setup(){
    const route = useRoute()
    const router = useRouter()
    const slugArray = route.params.slug as string[]
    let slug = route.params.slug ? slugArray.join('/') : 'home'
    const state = reactive({ story: undefined });
    const storyapi = useStoryApi()

    try{
      const {data} = await storyapi.get(`cdn/stories/${slug}`, {version: 'draft'})
      state.story = data.story
      return {
        state,
        useStoryBridge,
      }
    }catch(e){
      router.push("/home")
    }
  },
  mounted() {
    useStoryBridge(this.state.story.id, (story) => (this.state.story = story))
  }
})
</script>
