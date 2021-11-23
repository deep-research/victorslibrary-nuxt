<template>
  <client-only>
    <div>
      {{ article }}
    </div>
  </client-only>
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
    let article = await this.$content('/', { deep: true }).where({title: this.title}).fetch()
    console.log(article)
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
