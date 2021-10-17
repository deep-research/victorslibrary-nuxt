<template>
    <span>
        {{ field }}
    </span>
</template>

<script>
export default {
  props: {
    field: {
      type: String,
      required: true
    }
  }
};
</script>
