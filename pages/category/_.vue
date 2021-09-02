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

    let article
    if (!path.startsWith("/category/subcategory") && !path.startsWith("/category/tocategory")) {
      [article] = await $content("category", { deep: true }).where({ path }).fetch()
    } else if (path.startsWith("/category/tocategory")) {
      [article] = await $content("/category/tocategory", { deep: true }).where( {slug: params.pathMatch.replace("tocategory/", "")} ).fetch()
    } else {
      article = false
    }

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    return {
      article
    }
  }
}
</script>
