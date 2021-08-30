<template>
  <div>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>


<script>
  export default {
    async asyncData({ $content, params, error }) {
      const article = await $content('/', params.slug)
        .fetch()
        .catch((err) => {
          error({ statusCode: 200, message: 'Page not found' })
        })

      return {
        article
      }
    }
  }
</script>
