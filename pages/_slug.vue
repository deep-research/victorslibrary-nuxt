<template>
  <div>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>


<script>
export default {
  async asyncData ({ $content, app, params, error }) {
    const [article] = await $content("/articles", { deep: true }).where({slug: params.slug}).fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }
    
    return {
      article
    }
  }
}
</script>
