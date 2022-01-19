<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6"> {{ post.title }}</div>
    </q-card-section>
    <q-separator color="pink-4" v-if="comments.length !== 0"/>
    <q-card-section v-if="comments.length !== 0">
      <div v-for="comment in comments" :key="comment.id">{{ comment.body }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    default: () => ({})
  },
  comments: {
    type: Array,
    default: () => ([])
  }
})
</script>
