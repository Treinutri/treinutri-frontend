<template>
  <div class="ball" :class="{ 'ball--selected': isSelected }">
    <div v-if="isSelected" class="ball__selected">
      <ph-palette :color="primaryColor" size="20" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhPalette } from '@phosphor-icons/vue'

import { useTheme } from 'vuetify'

interface IProps {
  background: string
  isSelected: boolean
}

defineProps<IProps>()

const theme = useTheme()
const { primary: primaryColor } = theme.current.value.colors
</script>

<style scoped lang="scss">
.ball {
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;

  border-radius: 50%;

  background: v-bind(background);

  cursor: pointer;

  position: relative;

  transform: translate(0px);

  &--selected {
    border: 1px solid rgb(var(--v-theme-primary));
  }

  &__selected {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    background-color: rgb(var(--v-theme-secondary));

    position: absolute;

    border-radius: 50%;

    bottom: -10px;

    right: -10px;

    z-index: 3;
  }
}
</style>
