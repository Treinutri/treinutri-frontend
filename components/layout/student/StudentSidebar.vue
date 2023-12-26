<template>
  <div class="sidebar">
    <div class="d-flex justify-center align-center pa-4">
      <nuxt-link to="/aluno/home" class="d-flex align-center">
        <v-img :src="LogoImage" alt="logo" width="75px" class="mt-4" />
      </nuxt-link>
    </div>

    <div class="sidebar__perfil-item mb-3">
      <div class="d-flex align-center" :class="{ 'justify-center': !isExpanded }">
        <v-avatar size="50">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <transition>
          <div v-if="isExpanded" class="ms-3 d-flex flex-column">
            <app-text class="sidebar__text" color="white" as="strong" size="lg" weight="semibold">
              Joao
            </app-text>

            <nuxt-link to="/aluno/perfil" class="decoration-none">
              <app-text class="sidebar__text" color="white" as="span" weight="medium">
                Ver perfil
              </app-text>
            </nuxt-link>
          </div>
        </transition>
      </div>
    </div>

    <div v-for="(subgroup, i) in items" :key="i">
      <div v-if="subgroup.text" class="sidebar__group-text">
        <app-text
          v-if="subgroup.type === 'group' && isExpanded"
          class="mx-3"
          size="sm"
          as="span"
          weight="medium"
          color="text"
        >
          {{ subgroup.text }}
        </app-text>

        <div class="sidebar__group-text-line"></div>
      </div>

      <ul v-for="(item, i) in subgroup.group" :key="'subgroup-item' + i">
        <li
          :class="{
            'sidebar__active-item': linkActive === item.slug,
          }"
          class="sidebar__item cursor-pointer"
          @click="() => navigateToLink(item)"
        >
          <div class="d-flex align-center" :class="{ 'justify-center': !isExpanded }">
            <component
              :is="item.icon"
              size="25"
              weight="light"
              :color="linkActive === item.slug ? primaryColor : gray500Color"
            />

            <app-text
              v-if="isExpanded"
              class="ms-4 d-inline-block sidebar__text"
              as="span"
              size="md"
              :color="linkActive === item.slug ? 'primary' : 'subtitle'"
              weight="medium"
            >
              {{ item.text }}
            </app-text>
          </div>
        </li>
      </ul>
    </div>
    <app-modal v-model="isModalLogoutOpen" :is-closable="true" max-width="500px">
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
            <app-text color="red-500" as="strong" weight="medium" class="px-10" @click="logout">
              Sair
            </app-text>
          </app-button>
          <app-button class="px-4" @click="isModalLogoutOpen = false">Cancelar</app-button>
        </div>
      </div>
    </app-modal>
  </div>
</template>

<script setup lang="ts">
import { PhHouse, PhCompass, PhArrowLineLeft } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'
import AppText from '@/components/ui/AppText.vue'
import BackImage from '@/assets/ilustrations/logout.svg'

import LogoImage from '@/assets/logo.png'

// import { useUserStore } from "@/stores/userStore";
import { SlugRouterTypes } from '@/types/student'

const isModalLogoutOpen = ref<boolean>(false)

interface IProps {
  isExpanded: boolean
}

defineProps<IProps>()

const theme = useTheme()
const primaryColor = theme.current.value.colors.primary
const gray500Color = theme.current.value.colors['text-500']

const route = useRoute()

interface IRouterItem {
  text: string
  icon: any
  url: string
  slug: SlugRouterTypes
}
interface IRouterGroupItems {
  type: 'normal' | 'group'
  text?: string
  group?: IRouterItem[]
}

const items: IRouterGroupItems[] = [
  {
    type: 'normal',
    text: '',
    group: [{ text: 'Início', icon: PhHouse, url: '/aluno/home', slug: 'home' }],
  },
  {
    type: 'group',
    text: 'Ia',
    group: [
      {
        text: 'Ia',
        icon: PhCompass,
        url: '/aluno/home',
        slug: 'ia',
      },
    ],
  },
  {
    type: 'group',
    text: 'Funcionalidades',
    group: [
      {
        text: 'Sair',
        icon: PhArrowLineLeft,
        url: '/aluno/cronograma',
        slug: 'sair',
      },
    ],
  },
]

const linkActive = computed(() => {
  return route.meta.activeNavLink
})

async function navigateToLink(item: IRouterItem) {
  if (item.slug !== 'sair') {
    await navigateTo(item.url)
  } else {
    isModalLogoutOpen.value = true
  }
}

async function logout() {
  await navigateTo('/auth/login')
}
</script>

<style lang="scss" scoped>
.decoration-none {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

.sidebar {
  height: 100%;

  &__group-text {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__group-text-line {
    flex: 1;
    width: 100%;
    height: 0.0625rem;

    background: rgb(var(--v-theme-gray-200));
  }

  &__text {
    width: 250px;
    white-space: normal;
    word-break: none;
    word-wrap: nowrap;
  }

  &__item {
    min-height: 50px;
    padding: 10px 29px 10px 29px;
  }

  &__item,
  &__perfil-item {
    margin: 0.7rem 0.2rem;
    transition: all 0.5s ease;
  }

  &__perfil-item {
    list-style-type: none;

    padding: 1rem;

    background-color: rgb(var(--v-theme-primary));

    border-radius: 8px;
  }

  &__active-item {
    color: white;

    * {
      color: white;
    }

    border-radius: 0.5rem 0rem 0rem 0.5rem !important;
    border-right: 2px solid rgb(var(--v-theme-primary));
    background: rgb(var(--v-theme-secondary));
  }
}
</style>
