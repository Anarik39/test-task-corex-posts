<template>
  <q-page class="flex flex-center column q-gutter-y-xl">
    <q-btn
      size="22px"
      class="q-px-xl q-py-xs"
      color="pink-4"
      label="Отобразить посты"
      @click="loadPosts"
    />
    <index-list :posts="posts" v-if="showContent"/>
    <q-btn
      size="22px"
      class="q-px-xl q-py-xs"
      color="pink-4"
      label="Создать фейковой пост"
      @click="showModal = true"
      v-if="showContent"
    />
    <index-create-post-modal v-model="showModal" @closeModal="showModal = false"/>
  </q-page>
</template>

<script setup>
import IndexList from "components/Index/IndexList";
import {useStore} from 'vuex'
import {computed, ref} from "vue";
import {useQuasar} from 'quasar'
import IndexCreatePostModal from "components/Modal/IndexCreatePostModal";

const store = useStore()
const $q = useQuasar()

const posts = computed(() => store.getters["posts/get"]('posts'))
const showModal = ref(false)
const showContent = ref(false)

const submitNotify = (notifyType, message) => {
  $q.notify({
    position: 'top',
    type: notifyType,
    message,
  });
}

const loadPosts = () => {
  store.dispatch("posts/load", {path: 'posts', param: 'posts'})
    .then(() => submitNotify('positive', 'Успешно'))
    .catch(() => submitNotify('negative', 'Ошибка'))
    .finally(() => {
      showContent.value = true
    })
}
</script>
