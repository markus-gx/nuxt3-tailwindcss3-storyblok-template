import {defineNuxtPlugin} from "#app";
import LoadScript from "vue-plugin-load-script"

export default defineNuxtPlugin((nuxtapp) => {
    nuxtapp.vueApp.use(LoadScript)
})
