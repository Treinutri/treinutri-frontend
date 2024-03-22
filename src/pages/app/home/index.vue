<template>
  <div>
    <div class="typed-text">
      <client-only>
        <typed :options="options" class="d-flex align-center gap-5 mb-6 mb-md-2">
          <app-text as="h1" class="typing" size="5xl"></app-text>
        </typed>
      </client-only>
      <app-text as="p" color="text-600" weight="medium" size="lg" class="mt-10">
        Linkamos Alunos e Coach's em uma única plataforma.
      </app-text>
      <app-text as="p" color="text-600" weight="medium" size="lg">
        Treino, Nutriçao e Inteligência Artificial, conectados.
      </app-text>

      <div class="mt-3 d-flex align-center flex-column mt-6">
        <app-text as="span" weight="semibold" size="sm" class="mb-3 d-block">
          Escolha um dos dois perfis:
        </app-text>

        <div class="d-flex gap-10">
          <app-button
            class="px-10"
            background="green-500"
            @click="$router.push({ path: '/auth/register/steps?tipo=aluno' })"
          >
            Aluno
          </app-button>
          <app-button
            class="px-10"
            @click="$router.push({ path: '/auth/register/steps?tipo=coach' })"
          >
            Coach
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { PhBell } from '@phosphor-icons/vue'
import { Typed } from '@duskmoon/vue3-typed-js'

import type { TypedOptions } from '@duskmoon/vue3-typed-js'

// import api from '@/lib/api'
const options: TypedOptions = {
  strings: [
    'O seu app de saúde.',
    'O seu app de treino.',
    'O seu app de nutrição.',
    'O seu app de estilo de vida.',
  ],
  loop: true,
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 200,
  smartBackspace: true,
  showCursor: true,
  cursorChar: '',
}

definePageMeta({
  layout: 'app-view-layout',
})
</script>

<style lang="scss">
.typing {
  height: 70px !important;
}
.typed-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
}

.typed-cursor {
  display: block !important;
  height: 20px !important;
  width: 5px !important;

  background: rgb(var(--v-theme-blue-400)) !important;
}
</style>
