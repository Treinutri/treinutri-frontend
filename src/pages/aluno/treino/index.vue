<template>
  <div>treino</div>
</template>

<script setup lang="ts">
import { IPageMeta } from '@/types/student'
// import api from '@/lib/api'

definePageMeta({
  layout: 'student-view-layout',
  activeNavLink: 'treino',
  activeParentNavLink: 'meus_planos',
  headerText: 'Treino',
} as IPageMeta)
</script>

<style scoped lang="scss"></style>
