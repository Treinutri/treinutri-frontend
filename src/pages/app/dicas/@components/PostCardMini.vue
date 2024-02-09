<template>
  <app-box class="post">
    <div class="d-flex gap-20">
      <div class="post__img-container">
        <img
          cover
          class="post__img"
          :src="image || 'https://treinutri.com.br/assetsContato/img/photos/frango.jpg'"
        />
      </div>
      <div class="d-flex justify-center flex-column gap-5 pa-4 ps-0">
        <app-text as="strong" size="lg" class="post__title">
          {{ title }}
        </app-text>
        <app-text
          as="strong"
          size="sm"
          color="text-600"
          weight="medium"
          class="d-block d-flex align-center gap-5"
        >
          <ph-calendar />
          <span>{{ date }}</span>
        </app-text>
      </div>
    </div>
  </app-box>
</template>

<script setup lang="ts">
import { PhCalendar } from '@phosphor-icons/vue'
interface IProps {
  title: string
  date: string
  image?: string
}
defineProps<IProps>()
</script>

<style scoped lang="scss">
@use '@/styles/_variables.scss' as variables;
.post {
  overflow-wrap: break-word;
  word-break: break-word;

  cursor: pointer;

  &__title:hover {
    color: rgb(var(--v-theme-blue-600));
  }

  &__img {
    width: 100%;
    height: 100%;
    max-width: 80px;
    object-fit: cover;

    transition: all 0.5s ease-in-out;

    border-radius: variables.$border-radius;
  }

  &__img-container {
    width: 100%;

    max-width: 80px;
    overflow: hidden;
    border-radius: variables.$border-radius;

    transition: all 0.6s ease-in-out;
  }
  &__img:hover {
    transform: scale(110%);
  }
}
</style>
