import {useRoute, useRouter} from "vue-router";
import {reactive} from "@vue/runtime-core";
import useStoryApi from "~/composables/useStoryApi";
import useStoryBridge from "~/composables/useStoryBridge";

export default async (lang = 'de') => {
    const route = useRoute()
    const router = useRouter()
    const slugArray = route.params.slug as string[]
    let slug = route.params.slug ? slugArray.join('/') : 'home'
    const state = reactive({ story: undefined });
    const storyapi = useStoryApi()

    try{
        const {data} = await storyapi.get(`cdn/stories/${slug}`, {version: 'draft', language: lang})
        state.story = data.story
        return {
            state,
            useStoryBridge,
        }
    }catch(e){
        router.push("/home")
    }
}
