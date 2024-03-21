<template>
  <div ref="target" class="w-100">
    <div class="d-flex justify-space-between" @click="isOpen = !isOpen">
      <list-item :link-active="activeParentNavLink" :item="item" :is-expanded="isExpanded" />
      <ph-caret-down
        v-if="item?.subgroup?.length && !isOpen && isExpanded"
        :color="activeParentNavLink === item.slug ? primary : gray400"
        size="26"
        class="ml-auto justify-self-end"
      />

      <ph-caret-up
        v-if="item?.subgroup?.length && isOpen && isExpanded"
        :color="activeParentNavLink === item.slug ? primary : gray400"
        size="26"
        class="ml-auto justify-self-end"
      />
    </div>
    <div v-if="isOpen" class="mt-3">
      <list-item
        v-for="(subgroupItem, index) in item.subgroup"
        :key="index"
        :link-active="linkActive"
        class="pb-3 pt-3"
        :class="{ 'ps-4': isExpanded }"
        :item="subgroupItem"
        :is-expanded="isExpanded"
        @click="$router.push(subgroupItem?.url || '')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { PhCaretDown, PhCaretUp } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'
import { IItem } from './@types'
import ListItem from './ListItem.vue'

interface IProps {
  item: IItem
  isExpanded: boolean
}
defineProps<IProps>()
const linkActive = inject<string>('linkActive', '')
const activeParentNavLink = inject<string>('activeParentNavLink', '')

const { primary, 'gray-400': gray400 } = useTheme().current.value.colors
const isOpen = ref<boolean>(false)
const target = ref(null)

onClickOutside(target, () => {
  isOpen.value = false
})
</script>

<style scoped></style>
