import useStoryApi from "~/composables/useStoryApi";
import {readonly, ref} from "@vue/reactivity";

const navigation = ref([])
export default () => {
    const storyapi = useStoryApi()
    storyapi.get('cdn/stories/settings').then((response) => {
        const data = response.data
        navigation.value = data.story.content.navigation
    })
    return {
        nav: readonly(navigation)
    }
}
