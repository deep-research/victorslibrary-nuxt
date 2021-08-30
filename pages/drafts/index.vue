<template>
  <div>
      <error></error>
  </div>
</template>

    <script>
    import error from  '../../layouts/error.vue'

    export default {
      async asyncData({ error }) {
        error({ statusCode: 404, message: 'Page not found' })
      },
      components: {
        error
      }
    }
    </script>