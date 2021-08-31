<template>
  <article>
    <h1>All Pages</h1>
    <h1 v-if="dev">Currently in development</h1>
    <h1 v-else>Currently in production</h1>

    <div v-for="article in articles" :key="article.id">
      <h1><nuxt-link :to="article.slug">{{ article.title }}</nuxt-link></h1>
      <div v-if="article.lyrics" v-html="$md.render(String(article.lyrics))"></div>
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script lang="ts">
  import Config from "../nuxt.config.js"

  export default {
    data () {
      return {
        dev: Config.dev
      }
    },
    async asyncData ({ $content }: {$content: any })  {
      const articles = await $content('/articles', { deep: true }).fetch()

      return {
        articles
      }
    }
}
</script>
