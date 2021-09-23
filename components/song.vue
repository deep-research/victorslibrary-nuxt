<template>
  <div>
    <h1 v-if="article.title">Song: {{ article.title }}</h1>

    <p><nuxt-link to="/">Home Page</nuxt-link></p>
    <br />

    <div v-if="article.band" style="font-size: 120%">By {{ article.band }}
      <span v-if="article.authors">({{ article.authors.join(', ')}})</span>
    </div>

    <p v-if="article.explicit">Warning: Contains explicit content.</p>      

    <div v-if="article.description">
      <h2>Description</h2>
      <p v-html="$md.render(String(article.description))"></p>
    </div>

    <div v-if="article.recordings">
      <h2>Recording<span v-if="article.recordings.length > 1">s</span></h2>
      <div v-for="recording in article.recordings" :key="recording.title">
        <h3 v-if="recording.title">{{ recording.title }}</h3>
      
        <div v-if="recording.type">Type: {{ recording.type }}</div>
        <div v-if="recording.style">Genre: {{ recording.style }}</div>
        <div v-if="recording.length">Length: {{ recording.length }}</div>
        <div v-if="recording.released">Released: {{ recording.released }}</div>
        
        <p v-if="recording.link && recording.type !== 'Video'">
          <audio controlsList="nodownload" controls>
            <source :src="recording.link" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </p>
        <p v-else-if="recording.link && recording.type === 'Video'">
          <video controlsList="nodownload" controls>
            <source :src="recording.link" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </p>
      </div>
    </div>

    <div v-if="article.lyrics">
      <h2>Lyrics</h2>
      <v-runtime-template
        :template="$div($md.render(article.lyrics))">
      </v-runtime-template>
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
