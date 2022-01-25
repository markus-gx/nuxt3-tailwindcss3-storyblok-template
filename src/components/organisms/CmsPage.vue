<template>
  <div id="page">
    <header>
      <navigation></navigation>
      <component v-for="blok in header" :key="blok._uid"
                 v-editable="blok"
                 :is="blok.component"
                 v-bind="{...blok}"></component>
    </header>
    <main>
      <component v-for="blok in body" :key="blok._uid"
                 v-editable="blok"
                 :is="blok.component"
                 v-bind="{...blok}"
      ></component>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import Navigation from "~/components/atoms/Navigation.vue";
import CallToAction from "~/components/atoms/CallToAction.vue";
import ImageStage from "~/components/atoms/ImageStage.vue";
import OneToRuleThemAll from "~/components/organisms/OneToRuleThemAll.vue";

export default defineComponent({
  name: "CmsPage",
  components: {
    Navigation,
    CallToAction, ImageStage, OneToRuleThemAll},
  props: {
    header: {
      type: Array,
      default: () => []
    },
    body: {
      type: Array,
      default: () => []
    }
  }
})
</script>
