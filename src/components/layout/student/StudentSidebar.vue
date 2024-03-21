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
            'sidebar__active-item':
              linkActive === item.slug || $route.meta.activeParentNavLink === item.slug,
          }"
          class="sidebar__item cursor-pointer"
          @click.stop="navigateToLink(item)"
        >
          <list-item
            v-if="!item.subgroup?.length"
            :link-active="linkActive || ''"
            :is-expanded="isExpanded"
            :item="item"
            @click="$router.push(item?.url || '')"
          />

          <list-subgroup-item
            v-else
            :is-expanded="isExpanded"
            :item="{
              icon: item.icon,
              text: item.text,
              slug: item.slug,
              url: item.url || '',
              subgroup: item.subgroup || [],
            }"
          />
        </li>
      </ul>
    </div>
    <app-logout-modal v-model="isModalLogoutOpen" />
  </div>
</template>

<script setup lang="ts">
import {
  PhHouse,
  PhCompass,
  PhArrowLineLeft,
  PhChartDonut,
  PhPhone,
  PhBarbell,
  PhOrangeSlice,
  PhPill,
  PhFirstAidKit,
  PhClipboard,
} from '@phosphor-icons/vue'
import ListSubgroupItem from './ListSubgroupItem.vue'
import ListItem from './ListItem.vue'
import { IItem } from './@types'
import AppText from '@/components/ui/AppText.vue'
import LogoImage from '@/assets/logo.png'
// import { useUserStore } from "@/stores/userStore";

const isModalLogoutOpen = ref<boolean>(false)

interface IProps {
  isExpanded: boolean
}

defineProps<IProps>()

const route = useRoute()

interface IRouterGroupItems {
  type: 'normal' | 'group'
  text?: string
  group?: IItem[]
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
        url: '/app/ia',
        slug: 'ia',
      },
    ],
  },

  {
    type: 'group',
    text: 'Funcionalidades',
    group: [
      {
        text: 'Meus Planos',
        icon: PhClipboard,
        subgroup: [
          {
            text: 'Treino',
            icon: PhBarbell,
            url: '/aluno/treino',
            slug: 'treino',
          },
          {
            text: 'Nutrição',
            icon: PhOrangeSlice,
            url: '/aluno/nutricao',
            slug: 'nutricao',
          },
          {
            text: 'Suplementação',
            icon: PhFirstAidKit,
            url: '/aluno/suplementacao',
            slug: 'suplementacao',
          },
          {
            text: 'Ergogenicos',
            icon: PhPill,
            url: '/aluno/ergogenicos',
            slug: 'ergogenicos',
          },
        ],
        slug: 'meus_planos',
      },
      {
        text: 'Dashboard',
        icon: PhChartDonut,
        url: '/aluno/dashboard',
        slug: 'dashboard',
      },
    ],
  },

  {
    type: 'group',
    text: 'Outros',
    group: [
      {
        text: 'Contato',
        icon: PhPhone,
        url: '/app/contato',
        slug: 'contato',
      },
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
const activeNavParentLink = computed(() => {
  return route.meta.activeParentNavLink
})

provide('linkActive', linkActive)
provide('activeParentNavLink', activeNavParentLink)

function navigateToLink(item: IItem) {
  if (item.slug === 'sair') {
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
    display: flex;
    align-items: center;
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
