<template>
  <div>
    <h1>Victor's Library<br />
        <span style="font-size: 24px">(Experimental Version)
        </span>
    </h1>
    <h2>Writing</h2>
    <div v-for="article in data.articles" :key="article.slug">
      <h2><nuxt-link :to="article.slug">{{ article.title }}</nuxt-link></h2>
    </div>

    <h2>Songs</h2>
    <div v-for="article in data.songs" :key="article.slug">
      <h2><nuxt-link :to="article.slug">{{ article.title }}</nuxt-link></h2>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData ({ $content, error }: {$content: any, error: any })  {
    let [articles, songs] = await Promise.all([
      $content('/', { deep: false }).fetch(),
      $content('/reenchantment-songs', { deep: true }).fetch()
    ])

    let data = {
      articles: articles,
      songs: songs
    }

    return {
      data
    }
  }
}
</script>