<template>
    <div>
        {{ sortedArray() }}
    </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    sortedArray(){
      return this.list.sort()
    }
  }
};
</script>
