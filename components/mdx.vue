<template>
  <div>
      <!-- <mdxPathInCamelCase /> -->
      <component :is="name"></component>
  </div>
</template>

<script lang="ts">
export default {
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
    
    this.name = this.$camelCase (
      'mdx ' +
      String(this.article.path)
        .replace(
          /[^a-zA-Z0-9]/g,
          ' '
      )
    )
  }
}
</script>
