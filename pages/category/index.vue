<template>
  <article>
    <h1>All Categories</h1>
    <h1 v-if="dev">Currently in development</h1>
    <h1 v-else>Currently in production</h1>

    <div v-for="article in articles" :key="article.id">
      <div v-if="!article.path.startsWith('/category/subcategory')">
        <h1><nuxt-link :to="article.path">{{ article.title }}</nuxt-link></h1>
        <div v-if="article.lyrics" v-html="$md.render(String(article.lyrics))"></div>
        <nuxt-content :document="article" />
      </div>
    </div>

    <br />
    <h1>Category</h1>
    <h1><nuxt-link to="/category/subcategory">Subcategory Search</nuxt-link></h1>
  </article>
</template>

<script lang="ts">
  import Config from "../../nuxt.config.js"

  export default {
    data () {
      return {
        dev: Config.dev
      }
    },
    async asyncData ({ $content, error }: {$content: any, error: any })  {

      // let [articles, morearticles] = await Promise.all([
      let [articles] = await Promise.all([
        $content('/category', { deep: true }).fetch(),
        // $content('/category/tocategory', { deep: true }).fetch()
      ])

      // articles = articles.concat(morearticles)

      articles.forEach((article: any = {})=> article.path = article.path.replace("/subtocategory", ""));

      if (!articles) {
        return error({ statusCode: 404, message: 'Article not found' })
      }

      return {
        articles
      }
    }
}
</script>
