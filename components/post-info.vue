<template>
  <div>
    <h1 v-if="article.title">Article: {{ article.title }}</h1>

    <p><nuxt-link to="/">Home Page</nuxt-link></p>
    <br />

    <div class="metadata">

      <div v-if="article.author">Author: {{ article.author }}</div>

      <div v-if="article.published">Published: {{ article.published }}</div>

      <div v-if="article.updated">Updated: {{ article.updated }}</div>

      <div>

        Category:
         
        <span
          v-for="(item, index) in article.category"
          :key="item"
        >

          <span class="circled-number">{{parseInt(index)}}</span>

          <NuxtLink :to="'/'+item.toLowerCase()">{{ item }}</NuxtLink
          
          ><span
            v-if="parseInt(index) < Object.keys(article.category).length"
          >, </span>
        </span>
      </div>
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
    font-size: 120%
  }
</style>