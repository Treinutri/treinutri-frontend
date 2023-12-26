<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
      rail
      :rail-width="SIDEBAR_STUDENT_WIDTH"
      style="background: #ffffff; color: rgb(63, 63, 63)"
      :width="320"
      app
      class="nav"
      @mouseenter="() => handleUpdateRail(true)"
      @mouseleave="() => handleUpdateRail(false)"
    >
      <student-sidebar :is-expanded="isNavigationExpanded" />
    </v-navigation-drawer>

    <v-app-bar class="elevation-0" :height="90">
      <student-header :header="$route.meta.headerText" @toggle-sidebar="drawer = !drawer" />
    </v-app-bar>

    <v-main class="w-100 background">
      <student-container class="my-6">
        <slot></slot>
      </student-container>
    </v-main>

    <app-loading v-if="isLoading" />
  </v-layout>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

import { storeToRefs } from 'pinia'
import StudentHeader from '@/components/layout/student/StudentHeader.vue'
import StudentContainer from '@/components/layout/student/StudentContainer.vue'
import StudentSidebar from '@/components/layout/student/StudentSidebar.vue'

import { useLoadingStore } from '@/stores/loadingStore'

import { SIDEBAR_STUDENT_WIDTH } from '@/utils/layout'

const loadingStore = useLoadingStore()
const { isLoading } = storeToRefs(loadingStore)

const { initTheme } = useToggleTheme()

const { lgAndUp } = useDisplay()
const isNavigationExpanded = ref<boolean>(false)

const drawer = ref(lgAndUp.value)

function handleUpdateRail(value: any) {
  isNavigationExpanded.value = value
}

onMounted(() => {
  if (process.client) {
    initTheme()
  }
  console.log('mounted')
})
</script>

<style scoped lang="scss">
.background,
.v-main {
  background: rgb(var(--v-theme-background)) !important;
  min-height: 100vh !important;
}

.nav {
  background: rgb(var(--v-theme-background)) !important;
}
</style>
