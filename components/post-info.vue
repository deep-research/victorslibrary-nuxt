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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
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
    let article: any = await this.$content('/', { deep: true }).where({title: this.title}).fetch()
    this.article = article[0]
  }
})
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