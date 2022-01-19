<template>
  <div class="flex q-gutter-x-md">
    <index-item v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script setup>
import IndexItem from "components/Index/IndexItem";

const props = defineProps({
  posts: {
    type: Array,
    default: () => ([])
  }
})

</script>
