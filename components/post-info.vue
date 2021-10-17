<template>
  <div>
    <!-- Article Title -->
    <h1 v-if="article.title">Article: {{ article.title }}</h1>

    <!-- Link to Home -->
    <p><nuxt-link to="/">Home Page</nuxt-link></p>
    <br />

    <!-- Metadata Section -->
    <div class="metadata">

      <!-- Author -->
      <div v-if="article.author">Author: {{ article.author }}</div>

      <!-- Published -->
      <div v-if="article.published">Published: {{ article.published }}</div>

      <!-- Updated -->
      <div v-if="article.updated">Updated: {{ article.updated }}</div>

      <!-- Category -->
      <div v-if="article.category">

        <!-- Label -->
        Category:
         
        <!-- Category Loop -->
        <span
          v-for="(item, index) in article.category"
          :key="item.name"
        >

          <!-- Circled Number -->
          <span class="circled-number">{{parseInt(index)}}</span>

          <!-- Link to Category -->
          <NuxtLink :to="item.url">{{ item.name }}</NuxtLink
          
          ><!-- Comma After Link --><span
            v-if="parseInt(index) < Object.keys(article.category).length"
          >, </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }  
  },
  data () {
    return {
      article: {}
    }
  },
  async fetch() {
    let article = await this.$content('/', { deep: true }).where({title: "A Guide to Occult Research"}).fetch()
    this.article = article[0]
  }
}
</script>

<style scoped>
  .circled-number {
    background: #cccccc;
    border-radius: 0.8em;
    -moz-border-radius: 0.8em;
    -webkit-border-radius: 0.8em;
    color: #ffffff;
    display: inline-block;
    font-weight: bold;
    line-height: 1.4em;
    text-align: center;
    width: 1.4em;
    font-size: 75%;
  }

  .metadata {
    font-size: 120%;
  }
</style>
