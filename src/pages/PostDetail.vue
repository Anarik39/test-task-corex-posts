<template>
  <q-page class="flex flex-center column q-gutter-y-xl">
    <post-detail-card :post="posts[0]" :comments="comments"/>
    <q-btn
      size="22px"
      class="q-px-xl q-py-xs"
      color="pink-4"
      label="На главную"
      @click="$router.push({path: '/'});"
    />
  </q-page>
</template>

<script setup>
import {computed, onMounted, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import PostDetailCard from "components/PostDetail/PostDetailCard";
import {useQuasar} from "quasar";

const store = useStore()
const route = useRoute()
const router = useRouter()
const $q = useQuasar()

const posts = computed(() => store.getters["posts/get"]('posts'))
const comments = computed(() => store.getters["posts/get"]('comments'))

const submitNotify = (notifyType, message) => {
  $q.notify({
    position: 'top',
    type: notifyType,
    message,
  });
}

watch(posts, () => {
  if (posts.value.length === 0) {
    router.push({name: 'error'})
  }
})

onMounted(() => {
  store.dispatch("posts/load", {
    path: `posts?id=${route.params.id}`,
    param: 'posts'
  })
    .catch(() => submitNotify('negative', 'Ошибка'))
  store.dispatch("posts/load", {
    path: `comments?postId=${route.params.id}`,
    param: 'comments'
  })
    .catch(() => submitNotify('negative', 'Ошибка'))
})
</script>
