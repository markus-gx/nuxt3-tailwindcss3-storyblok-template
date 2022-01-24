<template>
  <div class="space-y-2 py-4">
    <hr/>
    <h2 class="text-lg">One To Rule Them All</h2>
    <div class="prose max-w-none" v-html="renderedText"></div>
    {{text}}
    {{bloks}}
    {{textarea}}
    {{options}}
    {{assets}}
    <table class="table-auto">
      <thead>
        <tr>
          <td v-for="t in table.thead" :key="t._uid">{{t.value}}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tr in table.tbody" :key="tr._uid">
          <td v-for="td in tr.body" :key="td._uid">{{td.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import useStoryApi from "~/composables/useStoryApi";

export default defineComponent({
  name: "OneToRuleThemAll",
  setup(){
    const storyapi = useStoryApi()
    return {
      storyapi
    }
  },
  props: {
    text: {
      type: String,
      default: undefined
    },
    bloks: {
      type: Array,
      default: () => []
    },
    textarea: {
      type: String,
      default: undefined
    },
    options: {
      type: Array,
      default: () => []
    },
    table: {
      type: Object,
      default: undefined
    },
    assets: {
      type: Array,
      default: () => []
    },
    rich: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    renderedText(){
      return this.storyapi.richTextResolver.render(this.rich)
    }
  }
})
</script>
