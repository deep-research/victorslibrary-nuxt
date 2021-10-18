<template>
  <div>
    <post-info title="A Guide to Occult Research"></post-info>

    <h1>Victor's Library<br />
        <span style="font-size: 24px">(Experimental Version)
        </span>    
    </h1>

    <h2>Writing</h2>
    <div v-for="article in articles"  :key="'article/' + article.slug">
      <h2 v-if="article.type == 'Article'"><nuxt-link :to="article.slug">{{ article.title }}</nuxt-link></h2>
    </div>

    <h2>Songs</h2>
    <div v-for="article in articles" :key="'song/'+ article.slug">
      <h2 v-if="article.type == 'Song'"><nuxt-link :to="article.slug">{{ article.title }}</nuxt-link></h2>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    let articles = await $content('/', { deep: true }).sortBy('title').fetch()

    return {
      articles
    }
  }
}
</script>
