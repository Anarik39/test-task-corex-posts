<template>
  <q-card class="q-pa-md cursor-pointer" @click="$router.push({path: `/${post.id}`})">
    {{ post.title }}
  </q-card>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    default: () => ({})
  }
})
</script>
