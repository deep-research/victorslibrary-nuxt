<template>
    <div>
        {{ sortedArray() }}
    </div>
</template>

<script>
export default {
  props: {
    array: Array,
  },
  methods: {
    sortedArray(){
      return this.array.sort()
    }
  }
};
</script>
