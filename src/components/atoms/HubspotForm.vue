<template>
  <div :id="formId" class="prose">

  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core"

export default defineComponent({
  name: "HubspotForm",
  props: {
    formId: {
      type: String,
      required: true
    },
    portalId: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      formData: {
        region: "na1",
        portalId: this.portalId,
        formId: this.formId,
        target: `[id='${this.formId}']`
      }
    }
  },
  async mounted(){
    await this.$loadScript("//js.hsforms.net/forms/v2.js")
    window.hbspt.forms.create(this.formData)
  }
})
</script>
