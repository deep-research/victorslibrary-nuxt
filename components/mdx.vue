<template>
  <div>
     <component :is="$camelCase('mdx ' + article.slug)" />
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
      article: {}
    }
  },
  async fetch() {
    let article: any = await this.$content('/', { deep: true }).where({title: this.title}).fetch()
    this.article = article[0]
  }
})
</script>
