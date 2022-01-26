import {useRoute} from "vue-router";
import useStoryApi from "~/composables/useStoryApi";
import {reactive} from "@vue/runtime-core";
import useStoryBridge from "~/composables/useStoryBridge";

export default async (lang: string = "de") => {
    const route = useRoute()
    const storyapi = useStoryApi()
    const slugArray = route.params.slug as string[]
    const slug = route.params.slug ? slugArray.join('/') : 'home'

    const state = reactive({story: undefined})
    try{
        const {data} = await storyapi.get(`cdn/stories/${slug}`, {version: 'draft', language: lang})
        state.story = data.story
    }
    catch (e){
        console.error("500 not found")
    }
    return {
        state,
        params: route.params,
        useStoryBridge
    }
}
