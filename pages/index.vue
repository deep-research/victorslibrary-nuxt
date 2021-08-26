<template>
  <article>
    <h1>All Pages</h1>
    <div v-for="article in articles" :key="article.id">
      <h2>• <nuxt-link :to="article.path">{{ article.title }}</nuxt-link></h2>
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

<style>
  h1, h2, p {
    margin-bottom: 10px;
  }

  body {
    margin: 20px;
  }

</style>
