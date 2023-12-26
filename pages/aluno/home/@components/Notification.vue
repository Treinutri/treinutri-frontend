<template>
  <app-card
    border-color="gray-200"
    class="mt-2 px-4 py-6 mb-3 d-flex justify-space-between align-center"
    background="card"
  >
    <app-text size="sm" as="span" color="title" @click="$router.push({ path: link })">
      {{ text }}
    </app-text>
    <ph-caret-right size="20" :color="gray400" />
  </app-card>
</template>

<script setup lang="ts">
import { PhCaretRight } from '@phosphor-icons/vue'

import { useTheme } from 'vuetify'

interface IProps {
  text: string
  link: string
}
defineProps<IProps>()

const theme = useTheme()

const { 'gray-400': gray400 } = theme.current.value.colors
</script>

<style scoped></style>
