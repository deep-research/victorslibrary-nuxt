<template>
  <div>
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

<script lang="ts">
export default {
  async asyncData ({ $content }: {$content: any }): Promise<any>  {
    let articles = await $content('/', { deep: true }).sortBy('title').fetch()

    return {
      articles
    }
  }
}
</script>
