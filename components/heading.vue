<template>
  <div>
    <h1 v-if="article.title">Article: {{ article.title }}</h1>

    <p><nuxt-link to="/">Home Page</nuxt-link></p>
    <br />

    <div style="font-size: 120%">
      <div v-if="article.author">Author: {{ article.author }}</div>
      <div v-if="article.date">Published: {{ article.date }}</div>
      <div v-if="article.update">Updated: {{ article.update }}</div>
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
