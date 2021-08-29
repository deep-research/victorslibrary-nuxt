<template>
  <div>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>


<script>
  // Subfolders Create Routes for _.vue, use article.path to retrieve
  export default {
    async asyncData ({ $content, app, params, error }) {
      const path = `/${params.pathMatch || 'index'}`
      const [article] = await $content({ deep: true }).where({ path }).fetch()

      if (!article) {
        return error({ statusCode: 404, message: 'Article not found' })
      }

      return {
        article
      }
    }
  } 
</script>
