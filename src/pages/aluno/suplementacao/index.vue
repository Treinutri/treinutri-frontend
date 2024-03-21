<template>
  <div>suplementacao</div>
</template>

<script setup lang="ts">
import { IPageMeta } from '@/types/student'
// import api from '@/lib/api'

definePageMeta({
  layout: 'student-view-layout',
  activeNavLink: 'suplementacao',
  activeParentNavLink: 'meus_planos',
  headerText: 'Suplementação',
} as IPageMeta)
</script>

<style scoped lang="scss"></style>
