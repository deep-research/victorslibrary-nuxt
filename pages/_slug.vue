<template>
  <div>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>


<script>
  // Subfolders Become One Route for _slug.vue, use article.slug to retrieve
  export default {
    async asyncData({ $content, params }) {

      let articles = await $content('/articles', { deep: true }).fetch()

      if (!articles) {
        return error({ statusCode: 404, message: 'Article not found' })
      }

      const article = articles.filter(item => item.slug == params.slug)[0];

      return { article }
    }
  }

  // Subfolders Create Routes for _.vue, use article.path to retrieve
  // export default {
  //   async asyncData ({ $content, app, params, error }) {
  //     const path = `/${params.pathMatch || 'index'}`
  //     const [article] = await $content({ deep: true }).where({ path }).fetch()

  //     if (!article) {
  //       return error({ statusCode: 404, message: 'Article not found' })
  //     }

  //     return {
  //       article
  //     }
  //   }
  // } 
</script>
