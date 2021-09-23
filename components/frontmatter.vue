<template>
    <span>
        {{ field }}
    </span>
</template>

<script lang="ts">
export default {
  props: {
    field: {
      type: String,
      required: true
    }
  }
};
</script>
