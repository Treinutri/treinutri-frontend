<template>
  <app-box class="post">
    <div class="post__img-container">
      <img
        cover
        class="post__img"
        :src="image || 'https://treinutri.com.br/assetsContato/img/photos/frango.jpg'"
      />
    </div>
    <div class="d-flex gap-20 post__body">
      <div class="d-flex justify-center flex-column gap-5">
        <app-text v-if="tag" as="strong" size="sm" class="post__tag">
          <span>{{ tag }}</span>
        </app-text>
        <app-text as="strong" size="2xl" class="post__title">
          {{ title }}
        </app-text>

        <app-text color="blue-600" weight="medium" class="mt-4">{{ description }}</app-text>

        <div class="separator-bottom my-4"></div>

        <div class="d-flex align-center gap-20">
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

          <app-text
            as="strong"
            size="sm"
            color="text-600"
            weight="medium"
            class="d-block d-flex align-center gap-5"
          >
            <ph-user />
            por Trey
          </app-text>
        </div>
      </div>
    </div>
  </app-box>
</template>

<script setup lang="ts">
import { PhCalendar, PhUser } from '@phosphor-icons/vue'
interface IProps {
  title: string
  date: string
  image?: string
  tag?: string
  description?: string
}
defineProps<IProps>()
</script>

<style scoped lang="scss">
@use '@/styles/_variables.scss' as variables;
.post {
  cursor: pointer;

  overflow-wrap: break-word;
  word-break: break-word;

  &__tag {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 5px;

    color: rgb(var(--v-theme-blue-400));

    span {
      position: relative;

      &::before {
        content: '';

        transition: 0.4s;

        position: absolute;
        bottom: 0px;
        left: 0px;
        height: 1px;

        width: 0%;

        background: rgb(var(--v-theme-blue-400));
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }
    }

    &::before {
      content: '';
      width: 15px;
      height: 2px;
      background-color: rgb(var(--v-theme-blue-400));
    }
  }

  &__title {
    font-size: 1.5rem;
  }
  &__title:hover {
    color: rgb(var(--v-theme-blue-600));
  }

  &__img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: variables.$border-radius;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    transition: all 0.5s ease-in-out;
  }

  &__img-container {
    width: 100%;

    overflow: hidden;
    border-radius: variables.$border-radius;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    transition: all 0.6s ease-in-out;
  }
  &__img:hover {
    transform: scale(110%);
  }

  &__body {
    padding: 2rem;
  }
}
</style>
