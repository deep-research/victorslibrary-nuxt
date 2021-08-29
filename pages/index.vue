<template>
  <article>
    <h1>All Pages</h1>
    <div v-for="article in articles" :key="article.id">
      <h1><nuxt-link :to="article.path">{{ article.title }}</nuxt-link></h1>
      <div v-html="$md.render(String(article.lyrics))"></div>
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('/', { deep: true }).sortBy('createdAt', 'desc').fetch()

    return {
      articles
    }
  }
}
</script>
