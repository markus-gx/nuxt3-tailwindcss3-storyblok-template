<template>
  <section>
    <div class="h-[500px] relative">
      <img :src="image.filename" class="h-full w-full object-cover"/>
      <div class="overlay"></div>
      <div class="absolute w-full h-full top-0 grid place-items-center">
        <div class="text-white text-center space-y-6">
          <h1 class="text-6xl font-extralight shadow">{{title}}</h1>
          <h2 class="font-medium uppercase tracking-wide">{{subTitle}}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"

export default defineComponent({
  name: "ImageStage",
  props: {
    title: {
      type: String,
    },
    subTitle: {
      type: String
    },
    image: {
      type: Object
    }
  }
})
</script>
<style scoped>
.overlay{
  background-image: linear-gradient(180deg, rgba(0,0,0,0.40940126050420167) 0%, rgba(0,0,0,0) 100%), url('../../assets/images/overlay.png');
  @apply h-full absolute w-full top-0 bg-cover bg-no-repeat;
}
.overlay::before{
}
</style>
