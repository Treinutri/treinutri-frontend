<template>
  <div>nutricao</div>
</template>

<script setup lang="ts">
import { IPageMeta } from '@/types/student'
// import api from '@/lib/api'

definePageMeta({
  layout: 'student-view-layout',
  activeNavLink: 'nutricao',
  activeParentNavLink: 'meus_planos',
  headerText: 'Nutrição',
} as IPageMeta)
</script>

<style scoped lang="scss"></style>
