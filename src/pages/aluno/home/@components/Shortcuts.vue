<template>
  <section>
    <div class="d-flex align-center mb-8">
      <app-text as="span" size="lg" weight="bold" color="title">Atalhos</app-text>
      <ph-lightning class="ms-2" size="25" :color="primary" />
    </div>

    <v-row>
      <v-col
        v-for="(item, index) in shortcutsMenu"
        :key="'shortcutsMenu' + index"
        cols="12"
        md="6"
        lg="3"
        class="cursor-pointer"
        @click="$router.push(item.link)"
      >
        <app-card
          class="d-flex flex-column justify-center align-center pa-4 h-100"
          background="card"
        >
          <app-button :is-fab="true" background="gray-50" rounded>
            <component :is="item.icon" :color="primary" size="30" weight="regular" />
          </app-button>
          <div class="pa-3 d-flex flex-column justify-center">
            <app-text as="span" size="md" weight="medium" color="text-800" class="text-center">
              {{ item.title }}
            </app-text>
          </div>
        </app-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import {
  PhBarbell,
  PhChalkboardTeacher,
  PhOrangeSlice,
  PhLightning,
  PhPill,
} from '@phosphor-icons/vue'

import { ColorTypes } from '@/plugins/vuetify'

const theme = useTheme()

const { primary } = theme.current.value.colors

interface IShortcutsProps {
  icon: any

  title: string
  link: string
}
const shortcutsMenu: IShortcutsProps[] = [
  {
    icon: PhChalkboardTeacher,

    title: 'Feedbacks',

    link: '/aluno/home',
  },
  {
    icon: PhBarbell,

    title: 'Planos De Treino',

    link: '/aluno/home',
  },
  {
    icon: PhOrangeSlice,

    title: 'Planos De Nutrição',

    link: '/aluno/home',
  },
  {
    icon: PhPill,

    title: 'Suplementação',

    link: '/aluno/home',
  },
]
</script>

<style scoped></style>
