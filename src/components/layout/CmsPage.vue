<template>
  <div id="page">
    <header>
      <navigation></navigation>
      <component v-for="blok in header"
                 v-editable="blok"
                 :key="blok._uid" :is="blok.component" v-bind="{...blok}">
      </component>
    </header>
    <body>
    <component v-for="blok in body"
               v-editable="blok"
               :key="blok._uid" :is="blok.component" v-bind="{...blok}">
    </component>
    </body>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import Navigation from "~/components/atoms/Navigation.vue";
import ImageStage from "~/components/atoms/ImageStage.vue";
import CallToAction from "~/components/atoms/CallToAction.vue";
import OneToRuleThemAll from "~/components/atoms/OneToRuleThemAll.vue";
import TextSection from "~/components/molecules/TextSection.vue";
import {useRoute} from "vue-router";
import TextImage from "~/components/molecules/TextImage.vue";
import HubspotForm from "~/components/atoms/HubspotForm.vue";

export default defineComponent({
  name: "CmsPage",
  components: {
    Navigation,
    ImageStage, CallToAction, OneToRuleThemAll, TextSection,
    TextImage,
    HubspotForm
  },
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
