<template>
  <header class="header">
    <student-container>
      <div class="header__content">
        <div class="d-flex align-center">
          <app-button
            v-if="$route.fullPath !== '/aluno/home' && mdAndUp"
            class="px-6 me-md-15 me-3"
            size="md"
            :outlined="true"
            border-color="white"
            @click.passive="$router.back()"
          >
            <ph-arrow-left color="white" size="25" class="me-2" />
            <app-text as="strong" size="sm" color="white" weight="semibold">Voltar</app-text>
          </app-button>

          <ph-arrow-left
            v-else-if="!mdAndUp && $route.fullPath !== '/aluno/home'"
            color="white"
            size="25"
            class="me-2 cursor-pointer"
            @click.passive="$router.back()"
          />

          <app-text weight="semibold" size="xl" color="white">
            {{ headerText }}
          </app-text>
        </div>
        <div class="d-flex">
          <client-only>
            <app-button
              rounded
              :translucid="true"
              width="52"
              height="52"
              @click="handleToggleTheme"
            >
              <ph-sun-dim
                v-if="isDarkMode"
                class="header__toggle-theme"
                :size="28"
                color="white"
                weight="light"
              />

              <ph-moon
                v-else
                class="header__toggle-theme"
                :size="28"
                color="white"
                weight="light"
              />
            </app-button>

            <app-button
              v-if="smAndDown"
              class="ms-3"
              rounded
              :translucid="true"
              width="52"
              height="52"
            >
              <ph-list
                class="cursor-pointer"
                size="40"
                color="white"
                weight="regular"
                @click="$emit('toggle-sidebar')"
              />
            </app-button>
          </client-only>
        </div>
      </div>
    </student-container>
  </header>
</template>

<script setup lang="ts">
import { PhList, PhSunDim, PhMoon, PhArrowLeft, PhBellSimple } from '@phosphor-icons/vue'
import { useDisplay, useTheme } from 'vuetify'
import { HEADER_STUDENT_HEIGHT_UNIT } from '@/utils/layout'

import StudentContainer from '@/components/layout/student/StudentContainer.vue'

type EmitTypes = {
  'open-notifications': []
  'toggle-sidebar': []
}
defineEmits<EmitTypes>()

const { setTheme } = useToggleTheme()
const theme = useTheme()
const { smAndDown, mdAndUp } = useDisplay()

const route = useRoute()

const headerText = computed(() => {
  return route.meta.headerText
})

const isDarkMode = computed(() => {
  return theme.current.value.dark
})

function handleToggleTheme() {
  if (isDarkMode.value) {
    setTheme('light')
  } else {
    setTheme('dark')
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  max-height: v-bind(HEADER_STUDENT_HEIGHT_UNIT);

  display: flex;
  align-items: center;

  background: rgb(var(--v-theme-header));

  &__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__toggle-theme {
    cursor: pointer;
  }
}
</style>
