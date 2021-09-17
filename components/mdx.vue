<template>
  <div>
      <!-- <mdxPathInCamelCase /> -->
      <component :is="name"></component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: String,
  },
  data () {
    return {
      article: {
        path: ""
      },
      name: ""
    }
  },
  async fetch() {
    let article: any = await this.$content('/', { deep: true }).where({title: this.title}).fetch()
    this.article = article[0]
    
    this.name = Vue.prototype.$camelCase (
      'mdx ' +
      String(this.article.path)
        .replace(
          /[^a-zA-Z0-9]/g,
          ' '
      )
    )
  }
})
</script>
