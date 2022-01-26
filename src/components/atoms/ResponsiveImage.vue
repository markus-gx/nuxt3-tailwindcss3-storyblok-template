<template>
  <picture>
    <source v-for="(bp,idx) in breakpoints" :key="bp"
            :media="idx !== breakpoints.length-1 ? `(max-width: ${bp}px)` : ''" :srcset="transform(bp,0)"/>
    <img :src="imageSrc" :alt="image.alt" :sizes="sizes" :class="clazz"/>
  </picture>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"

export default defineComponent({
  name: "ResponsiveImage",
  props: {
    image: {
      type: Object,
      default: undefined
    },
    breakpoints: {
      type: Array,
      default: () => [420,640,768,1024,1280]
    },
    clazz: {
      type: String,
      default: ''
    }
  },
  computed:{
    transform(){
      return (width,height) => {
        return this.imageSrc.concat(`${width}x${height}`)
      }
    },
    sizes(){
      return this.breakpoints.map(bp => `(max-width: ${bp}px) ${bp}px`).join(', ')
    },
    imageSrc(){
      return this.image.filename.concat('/m/')
    }
  }
})
</script>
