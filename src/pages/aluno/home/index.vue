<template>
  <div>
    <div class="d-flex flex-column">
      <app-text as="span" color="subtitle">Seja bem vindo, João Paulo.</app-text>
      <app-text class="d-block mt-2" size="lg" as="strong" color="title" weight="semibold">
        Essa é a
        <app-text as="span" color="primary">TreiNutri</app-text>
      </app-text>
    </div>

    <v-row>
      <v-col cols="12" class="order-1 order-md-1">
        <v-row class="mt-8">
          <v-col cols="12" md="8" class="order-2 order-md-1">
            <app-carousel :images="images" height="500px" />

            <shortcuts class="mt-5 mt-md-10" />
          </v-col>
          <v-col cols="12" md="4" class="h-auto d-none d-md-block order-1 order-md-2">
            <app-card class="h-100" background="card">
              <header class="br-inherit-top bg-primary py-4 d-flex align-center justify-center">
                <app-text as="span" size="lg" weight="medium" color="white">Notificações</app-text>
                <ph-bell class="ms-3" size="30" color="white" />
              </header>

              <div class="pa-4">
                <app-text as="strong" size="sm" color="title" weight="bold">Hoje</app-text>

                <notification
                  text="Seu plano de treino foi atualizado"
                  link="/aluno/notification"
                />
              </div>

              <div class="pa-4 pt-0">
                <app-text as="strong" size="sm" color="subtitle" weight="medium">
                  04 de jun
                </app-text>

                <notification
                  v-for="(item, index) in 4"
                  :key="'notification' + index"
                  text="Noficação Teste!"
                  link="/aluno/notification"
                />
              </div>
            </app-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { PhBell } from '@phosphor-icons/vue'

import Notification from './@components/Notification.vue'

import Shortcuts from './@components/Shortcuts.vue'

import { IPageMeta } from '@/types/student'
// import api from '@/lib/api'

definePageMeta({
  layout: 'student-view-layout',
  activeNavLink: 'home',
  headerText: 'Início',
} as IPageMeta)

const theme = useTheme()

const images = [
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

const { 'gray-700': gray700, primary: primaryColor } = theme.current.value.colors

// example ts use in request

// interface Product {
//   nome: string
//   preco: number
// }
// async function fetchData() {
//   const { data } = await api.get<Product>('https://api.origamid.dev/json/notebook.json')

//   console.log(data)
// }

// onMounted(() => {
//   fetchData()
// })
</script>

<style scoped lang="scss">
.card-test {
  position: relative;

  &__badge {
    position: absolute;

    right: 0;
    top: 0;

    border-bottom-right-radius: 0px;
    border-top-left-radius: 0px;
  }
}
</style>
