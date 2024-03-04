<template>
  <div class="mt-15">
    <div class="d-flex flex-column align-center header">
      <img width="70px" :src="TreyImg" alt="Trei logo" />
      <app-text as="strong" size="6xl" class="d-block">Trey</app-text>
      <app-text weight="medium" color="text-600">
        OI! EU SOU A TREY, A INTELIGÊNCIA ARTIFICIAL DA TREINUTRI
      </app-text>
    </div>

    <div class="d-flex flex-column align-center">
      <div class="flex-grow-1 w-100 h-auto response">{{ responseIa }}</div>

      <v-textarea
        placeholder="Insira sua pergunta"
        variant="solo"
        class="flex-grow-1 w-100 mt-5"
      ></v-textarea>

      <div class="d-flex align-center gap-10">
        <app-button rounded="lg" class="px-6 mb-5" @click="handleSendMessageToIa">
          Perguntar
        </app-button>
        <app-button
          outlined
          border-color="primary"
          rounded="lg"
          class="px-6 mb-5"
          @click="handleClearIaResponse"
        >
          <app-text as="span" color="primary">Limpar</app-text>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TreyImg from '@/assets/trey.png'

definePageMeta({
  layout: 'app-view-layout',
})

const responseIa = ref<string>('')

function handleSendMessageToIa() {
  responseIa.value += 'response'
}
function handleClearIaResponse() {
  responseIa.value = ''
}
</script>

<style lang="scss" scoped>
.header {
  margin-top: 8rem;
  margin-bottom: 3rem;
}
.response {
  word-break: break-all;
}
</style>
