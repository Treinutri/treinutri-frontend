<template>
  <div class="mt-15">
    <div class="d-flex flex-column align-center header">
      <img width="70px" :src="NutriImg" alt="Trei logo" />
      <app-text as="strong" size="6xl" class="d-block">Dicas de Nutrição</app-text>
      <app-text weight="medium" color="text-600">
        Aqui você tem conteúdo exclusivo sobre Nutrição 🍎
      </app-text>
    </div>
    <v-row>
      <v-col cols="12" md="8">
        <post-card
          description="  Você já se perguntou por que tantos fisiculturistas e entusiastas da musculação incluem a
            proteína do frango em sua dieta? Bem, não é apenas uma questão de sabor ou tradição
            culinária. A prote..."
          title="Post"
          date="11-10-2023"
        />

        <v-pagination class="my-15" :length="12"></v-pagination>
      </v-col>
      <v-col cols="12" md="4">
        <app-text as="strong" size="lg" class="d-block mb-3">Últimos Posts</app-text>
        <post-card-mini title="Post" date="11-10-2023" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import PostCardMini from '../@components/PostCardMini.vue'
import PostCard from '../@components/PostCard.vue'
import NutriImg from '@/assets/nutri__logo.png'
definePageMeta({
  layout: 'app-view-layout',
})
</script>

<style lang="scss" scoped>
.header {
  margin-top: 8rem;
  margin-bottom: 10rem;
}
</style>
