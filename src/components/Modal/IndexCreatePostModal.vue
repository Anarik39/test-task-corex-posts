<template>
  <q-dialog :value="showModal">
    <q-card class="q-pa-md text-pink-4 q-gutter-y-md text-h4">
      Новый пост нада?
      <q-form @submit.prevent="submit">
        <q-input
          filled
          v-model="title"
          label="Название поста"
          color="pink-4"
          model-value=""
          :rules="[val => !!val || 'Обязательно!!!']"
        />
        <q-btn
          class="full-width"
          color="pink-4"
          label="Создать"
          type="submit"
        />
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from "vuex";
import {useQuasar} from 'quasar'

const store = useStore()
const $q = useQuasar()
const emit = defineEmits(['closeModal'])
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  }
})

const title = ref('')

const submitNotify = (notifyType, message) => {
  $q.notify({
    position: 'top',
    type: notifyType,
    message,
  });
}

const submit = () => {
  const data = {title: title.value};
  store.dispatch("posts/createNewPost", {method: 'posts', params: data})
    .then(() => {
      submitNotify('positive', 'Успешно')
    })
    .catch(() => submitNotify('negative', 'Ошибка'))
    .finally(() => {
      emit('closeModal')
    })
}
</script>
