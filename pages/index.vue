<template>
  <article>
    <h1>All Pages</h1>
    <h1 v-if="developement">Currently in development</h1>
    <h1 v-else>Currently in production</h1>

    <div v-for="article in articles" :key="article.id">
      <h1><nuxt-link :to="article.slug">{{ article.title }}</nuxt-link></h1>
      <div v-html="$md.render(String(article.lyrics))"></div>
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script lang="ts">
  import config from "../nuxt.config.js"

  export default {
    data () {
      return {
        developement: config.developement
      }
    },
    async asyncData ({ $content }) {
      const articles = await $content('/', { deep: false }).fetch()

      return {
        articles
      }
    }
}
</script>
