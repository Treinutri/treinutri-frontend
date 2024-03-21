<template>
  <div class="d-flex align-center w-100" :class="{ 'justify-center': !isExpanded }">
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
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { IItem } from './@types'

interface IProps {
  item: IItem
  isExpanded: boolean
  linkActive: string
}
defineProps<IProps>()

const theme = useTheme()
const primaryColor = theme.current.value.colors.primary
const gray500Color = theme.current.value.colors['text-500']
</script>

<style scoped></style>
