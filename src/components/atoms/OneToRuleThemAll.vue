<template>
  <section id="rule">
    <p>Text: {{text}}</p>
    <div>TextArea: {{textarea}}</div>
    <div class="prose my-4" v-html="renderedText"></div>
    <table>
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
  </section>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"

export default defineComponent({
  name: "OneToRuleThemAll",
  props: {
    text: {
      type: String
    },
    textarea: {
      type: String
    },
    richtext: {
      type: Object
    },
    table: {
      type: Object
    }
  },
  computed: {
    renderedText(){
      return this.$storyapi.richTextResolver.render(this.richtext)
    }
  }
})
</script>
