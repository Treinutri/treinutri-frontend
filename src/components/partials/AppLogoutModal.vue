<template>
  <div>
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
            <app-text
              color="red-500"
              as="strong"
              weight="medium"
              class="px-10"
              @click="handleLogout"
            >
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
import BackImage from '@/assets/ilustrations/logout.svg'

const isModalLogoutOpen = defineModel()

const router = useRouter()

function handleLogout() {
  router.push({
    path: '/auth/login',
  })
}
</script>

<style scoped></style>
