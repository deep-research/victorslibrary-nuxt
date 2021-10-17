<template>
  <div>
    <img :src="imgSrc()" :alt="alt" class="picture" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
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
      required: false
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
.picture {
  max-width: 480px;
}

@media only screen and (max-width: 480px) {
  .picture {
    width: 100%;
  }
}
</style>
