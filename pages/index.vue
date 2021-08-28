<template>
  <article>
    <h1>All Pages</h1>
    <div v-for="article in articles" :key="article.id">
      <div v-html="$md.render(article.title)"></div>
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
