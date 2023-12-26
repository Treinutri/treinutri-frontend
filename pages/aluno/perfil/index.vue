<template>
  <div class="perfil">
    <div class="perfil__header"></div>
    <div class="perfil__content">
      <header class="d-flex justify-space-between align-center">
        <div class="d-flex">
          <div class="perfil__avatar">
            <v-avatar size="x-large" class="border-detail perfil__avatar-photo">
              <v-img
                lazy-src="https://cdn.vuetifyjs.com/images/john.jpg"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="logo"
              />
            </v-avatar>

            <app-button
              :rounded="true"
              fab
              size="sm"
              background="secondary"
              class="perfil__avatar-photo-icon border-detail"
              @click.passive="handleOpenFilesystemFolders"
            >
              <ph-pencil-simple :color="primary" size="15" />
            </app-button>

            <v-file-input
              id="user-photo-file"
              v-model="userProfilePhoto"
              class="d-none"
              accept="image/*"
              @change="handleSaveNewUserPhoto"
            />
          </div>

          <div class="align-self-end ms-6 mb-3">
            <app-text as="strong" size="lg" color="title">João Paulo</app-text>
            <app-text class="d-block mt-2" as="span" color="subtitle">Aluno Trei</app-text>
          </div>
        </div>
        <app-button
          fab
          background="secondary"
          class="border-detail"
          :rounded="true"
          @click="isModalChangePerfilColorOpen = true"
        >
          <ph-palette :color="primary" size="20" />
        </app-button>
      </header>

      <app-box v-if="true" class="pa-4 py-6 mt-5" background="red-50" border-color="red-100">
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex gap-5">
            <ph-info size="22" />
            <app-text color="text-600">
              Seu perfil está incompleto. Preencha as informações restantes
            </app-text>
          </div>
        </div>
      </app-box>

      <v-row class="mt-10">
        <v-col cols="12" md="3">
          <app-box>
            <div class="menu">
              <app-card
                v-for="(menu, index) in menus"
                :key="index + 'menu'"
                detail-color="primary"
                class="menu__item"
                :background="index == selectedTab ? 'secondary' : 'card'"
                @click="
                  () => {
                    selectedTab = index
                    menu.title === 'Sair' ? (isModalBackOpen = true) : ''
                  }
                "
              >
                <div v-if="menu.title != 'Sair'" class="d-flex">
                  <app-text
                    class="me-4"
                    :weight="index == selectedTab ? 'bold' : 'medium'"
                    :color="index == selectedTab ? 'primary' : 'text-600'"
                  >
                    {{ menu.title }}
                  </app-text>
                  <component
                    :is="menu.icon"
                    :color="index == selectedTab ? primary : subtitle"
                    size="24"
                    weight="regular"
                  />
                </div>
                <div v-else class="d-flex">
                  <component :is="menu.icon" :color="red500" size="24" weight="regular" />

                  <app-text
                    class="ms-4"
                    :weight="index == selectedTab ? 'bold' : 'medium'"
                    :color="index == selectedTab ? 'primary' : 'text-600'"
                  >
                    {{ menu.title }}
                  </app-text>
                </div>
              </app-card>
            </div>
          </app-box>
        </v-col>
        <v-col cols="12" md="9">
          <v-window v-model="selectedTab">
            <v-window-item>
              <app-box class="pa-6"><personal-data /></app-box>
            </v-window-item>

            <v-window-item>
              <app-box class="pa-6"><password-data /></app-box>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </div>

    <app-modal v-model="isModalChangePerfilColorOpen" :is-closable="true" max-width="500px">
      <div class="pt-0">
        <div>
          <app-text
            class="d-block mt-0 mb-2"
            as="strong"
            size="xl"
            color="text-700"
            weight="semibold"
          >
            Escolha um tema
          </app-text>
          <app-text as="strong" color="text-500" weight="regular">
            Defina um tema para ficar na capa do seu perfil
          </app-text>
        </div>

        <div class="d-flex flex-wrap gap-10 mt-7">
          <ball-theme
            v-for="(theme, index) in perfilThemes"
            :key="'theme' + index"
            :background="theme"
            :is-selected="theme == selectedPerfilTheme"
            @click="selectedPerfilTheme = theme"
          />
        </div>

        <div class="d-flex gap-20 d-flex flex-wrap justify-center mt-10">
          <app-button :disabled="!selectedPerfilTheme" class="px-4" @click="handleUserChoiceTheme">
            Salvar Alterações
          </app-button>
          <app-button
            :outlined="true"
            border-color="primary"
            @click="isModalChangePerfilColorOpen = false"
          >
            <app-text color="primary" as="strong" weight="medium" class="px-10">Cancelar</app-text>
          </app-button>
        </div>
      </div>
    </app-modal>

    <app-modal v-model="isModalBackOpen" :is-closable="true" max-width="500px">
      <div class="pt-0 d-flex flex-column align-center justify-center mt-10">
        <img :src="BackImage" alt="Logout" />

        <app-text
          class="d-block mt-7 mb-2"
          as="strong"
          size="xl"
          color="text-700"
          weight="semibold"
        >
          Deseja sair?
        </app-text>
        <app-text as="strong" color="text-500" weight="regular">
          Tem certeza que deseja sair da plataforma?
        </app-text>

        <div class="d-flex gap-20 d-flex flex-wrap justify-center mt-10">
          <app-button :outlined="true" border-color="red-500">
            <app-text
              color="red-500"
              as="strong"
              weight="medium"
              class="px-10"
              @click="$router.back()"
            >
              Sair
            </app-text>
          </app-button>
          <app-button class="px-4" @click="isModalBackOpen = false">Cancelar</app-button>
        </div>
      </div>
    </app-modal>
  </div>
</template>

<script setup lang="ts">
import { PhPalette, PhPencilSimple, PhUser, PhLock, PhArrowLineLeft } from '@phosphor-icons/vue'

import { useTheme } from 'vuetify'

import { storeToRefs } from 'pinia'

import BallTheme from './@components/BallTheme.vue'

import PersonalData from './@components/PersonalData.vue'

import PasswordData from './@components/PasswordData.vue'

import BackImage from '@/assets/ilustrations/logout.svg'

import { PerfilThemeTypes, perfilThemes } from '@/theme'

import { IPageMeta } from '@/types/student'

import { useUserStore } from '@/stores/userStore'

definePageMeta({
  layout: 'student-view-layout',
  activeNavLink: 'perfil',
  headerText: 'Perfil',
} as IPageMeta)

const userStore = useUserStore()

const { userPerfilTheme } = storeToRefs(userStore)

const theme = useTheme()

const { primary, subtitle, 'red-500': red500 } = theme.current.value.colors

const isModalChangePerfilColorOpen = ref<boolean>(false)
const isModalBackOpen = ref<boolean>(false)

const selectedTab = ref<number>(0)

const selectedPerfilTheme = ref<PerfilThemeTypes | ''>()

const userProfilePhoto = ref<File[]>([])

const menus = [
  {
    title: 'Dados pessoais',
    icon: PhUser,
  },

  {
    title: 'Segurança',
    icon: PhLock,
  },

  {
    title: 'Sair',
    icon: PhArrowLineLeft,
  },
]

function handleUserChoiceTheme() {
  if (selectedPerfilTheme.value) {
    userStore.setUserChoicePerfilTheme(selectedPerfilTheme.value)
  }
  isModalChangePerfilColorOpen.value = false
}

function handleOpenFilesystemFolders() {
  const inputEl = document.querySelector('#user-photo-file') as HTMLInputElement

  if (inputEl) {
    inputEl.click()
  }
}

function handleSaveNewUserPhoto() {
  console.log(userProfilePhoto.value)
}

onMounted(() => {
  userStore.initUserPerfilTheme()
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as variables;
.perfil {
  $perfilBgHeight: 15.875rem;

  &__header {
    position: absolute;
    top: variables.$headerHeight;
    left: 0px;

    width: 100vw;
    height: $perfilBgHeight;
    background: v-bind(userPerfilTheme);
  }

  &__content {
    position: relative;
    margin-top: calc($perfilBgHeight - 74px);

    z-index: 2;
  }

  &__avatar {
    $height: 150px;
    $width: 150px;

    width: $width;
    height: $height;

    position: relative;

    &-photo {
      width: $width !important;
      height: $height !important;
    }

    &-photo-icon {
      position: absolute;
      bottom: 10px;

      right: -10px;
    }
  }
}

.menu {
  &__item {
    $paddingX: 2rem;

    padding: 2rem $paddingX;

    cursor: pointer;

    border-radius: 0px;
    position: relative;

    border: 0px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;

      left: 50%;

      transform: translateX(-50%);

      width: calc(100% - $paddingX * 2);
      height: 1px;
      background: rgb(var(--v-theme-gray-100));
    }
  }

  &__item:nth-child(1) {
    border-top-right-radius: inherit;
  }

  &__item:nth-last-child(1) {
    border-bottom-right-radius: inherit;
  }

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
