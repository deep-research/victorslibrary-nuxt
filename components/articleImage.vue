<template>
  <div>
    <img :src="imgSrc()" :alt="alt" class="article-image" />
    <figcaption>{{ caption }}</figcaption>
  </div>
</template>
<script>

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    }    
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 480px;
}

@media only screen and (max-width: 480px) {
  img {
    width: 100%;
  }
}
</style>