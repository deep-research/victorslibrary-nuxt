<template>
  <div>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>


<script lang="ts">
export default {
  async asyncData ({ $content, app, params, error }: {$content: any, app: any, params: any, error: any }) {
    const path = `/category/${params.pathMatch || 'index'}`
    console.log(path)
    const [article] = await $content("category", { deep: true }).where({ path }).fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    return {
      article
    }
  }
}
</script>
