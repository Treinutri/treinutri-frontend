<template>
  <app-container class="header">
    <nav>
      <img :src="Logo" alt="Logo" class="logo" />
      <ul
        ref="ulEl"
        :class="{ 'header__menu--open': isMenuMobileOpen }"
        class="header__menu"
        @click="handleClickList"
      >
        <li class="header__menu-close" @click="isMenuMobileOpen = false">
          <ph-x size="28" />
        </li>

        <li @click="$router.push({ path: '/app/home' })">Inicio</li>

        <v-menu open-on-hover elevation="0">
          <template #activator="{ props }">
            <div class="d-flex align-center header__item" v-bind="props">
              <li>Dicas da Treinutri</li>
              <ph-caret-down :color="blue600" weight="bold" class="ms-2" />
            </div>
          </template>

          <v-list elevation="0">
            <v-list-item to="/app/dicas/treino">
              <app-text as="strong" color="text-900" size="sm">Treino</app-text>
            </v-list-item>
            <v-list-item to="/app/dicas/nutricao">
              <app-text as="strong" color="text-900" size="sm">Nutrição</app-text>
            </v-list-item>
            <v-list-item to="/app/dicas/receitas">
              <app-text as="strong" color="text-900" size="sm">Receitas</app-text>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover elevation="0">
          <template #activator="{ props }">
            <div class="d-flex align-center header__item" v-bind="props">
              <li>Avaliações Grátis</li>
              <ph-caret-down :color="blue600" weight="bold" class="ms-2" />
            </div>
          </template>

          <v-list elevation="0">
            <v-list-item to="/app/avaliacao/imc">
              <app-text as="strong" color="text-900" size="sm">Avaliação de imc</app-text>
            </v-list-item>
            <v-list-item to="/app/avaliacao/fitness">
              <app-text as="strong" color="text-900" size="sm">Avaliação Fitness</app-text>
            </v-list-item>
          </v-list>
        </v-menu>

        <li @click="$router.push({ path: '/app/ia' })">Fale com a Trey- IA</li>

        <v-menu open-on-hover elevation="0">
          <template #activator="{ props }">
            <div class="d-flex align-center header__item" v-bind="props">
              <li>
                <app-text as="span" weight="semibold">Cadastre-se</app-text>
              </li>
              <ph-caret-down :color="blue600" weight="bold" class="ms-2" />
            </div>
          </template>

          <v-list elevation="0">
            <v-list-item to="/auth/register/steps?tipo=aluno">
              <app-text as="strong" color="text-900" size="sm">Sou aluno</app-text>
            </v-list-item>
            <v-list-item to="/auth/register/steps?tipo=coach">
              <app-text as="strong" color="text-900" size="sm">Sou coach</app-text>
            </v-list-item>
          </v-list>
        </v-menu>
      </ul>

      <ph-list
        size="28"
        class="header__menu-hamburguer"
        @click="isMenuMobileOpen = !isMenuMobileOpen"
      />
      <div class="d-flex gap-5 header__login-btn">
        <app-button rounded="xl" class="px-8" @click="$router.push({ path: '/auth/login' })">
          Login
        </app-button>
      </div>
    </nav>
    <div v-if="isMenuMobileOpen" class="header__menu-backdrop"></div>
  </app-container>
</template>

<script setup lang="ts">
import { PhCaretDown, PhList, PhX } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'
import { onClickOutside, onKeyPressed } from '@vueuse/core'
import AppContainer from '@/components/layout/app/AppContainer.vue'

import Logo from '@/assets/logo.png'

const ulEl = ref()

const theme = useTheme()
const { 'blue-600': blue600 } = theme.current.value.colors

const isMenuMobileOpen = ref<boolean>(false)

function close() {
  isMenuMobileOpen.value = false
}
function handleClickList(event) {
  console.log(event)
}

onClickOutside(ulEl, () => (isMenuMobileOpen.value = false))

onKeyPressed('Escape', () => {
  console.log('Escape')
})
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 90px;
  padding-block: 1rem;

  &__menu-hamburguer {
    cursor: pointer;
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__menu-close {
    display: none;
    justify-self: flex-end;
  }
  &__menu {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  li {
    font-size: 1.1rem;
    font-weight: 600;
    color: rgb(var(--v-theme-gray-700));

    cursor: pointer;

    transition: all 0.3s ease;

    &:hover,
    &:active,
    &:visited {
      color: rgb(var(--v-theme-blue-600));
    }
  }
  &__item:hover li {
    color: rgb(var(--v-theme-blue-600));
  }

  @media (max-width: 1000px) {
    &__menu-hamburguer {
      display: block;
    }

    &__menu-close {
      display: block;
      align-self: flex-end;
    }
    &__menu:not(.header__menu--open) {
      display: none;
    }

    &__menu--open {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      position: fixed;
      background-color: rgb(var(--v-theme-gray-800));
      max-width: 300px;
      width: 100%;
      height: 100dvh;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      li,
      & > * {
        color: white;
      }
    }

    &__menu-backdrop {
      content: '';
      position: absolute;
      display: block;
      width: 100vw;
      height: 100vh;
      inset: all;
      top: 0;
      left: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
    }

    &__login-btn {
      display: none !important;
    }
  }
}
.logo {
  max-width: 60px;
}
</style>
