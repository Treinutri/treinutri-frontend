<template>
  <div>
    <v-row>
      <v-col md="6" class="pt-4 pb-0">
        <label for="name">
          <app-text size="sm" color="subtitle" as="span" weight="regular">
            Digite seu nome completo
            <span class="text-red-500">*</span>
          </app-text>
        </label>

        <v-text-field
          id="name"
          v-model="inputs.name.value"
          class="mt-3"
          placeholder="name"
          :error-messages="inputs.name.errors"
        >
          <template #prepend-inner>
            <ph-user class="me-3" :color="gray500" size="20" />
          </template>
        </v-text-field>
      </v-col>

      <v-col md="6" class="pt-4 pb-0">
        <label for="phone">
          <app-text size="sm" color="subtitle" as="span" weight="regular">
            Número de telefone
            <span class="text-red-500">*</span>
          </app-text>
        </label>

        <v-text-field
          id="phone"
          v-model="inputs.phone.value"
          class="mt-3 mb-2"
          placeholder="Telefone"
          :error-messages="inputs.phone.errors"
        >
          <template #prepend-inner>
            <ph-phone class="me-3" :color="gray500" size="20" />
          </template>
        </v-text-field>
      </v-col>

      <v-col md="6" class="pt-0">
        <label for="email">
          <app-text size="sm" color="subtitle" as="span" weight="regular">
            Digite seu e-mail
            <span class="text-red-500">*</span>
          </app-text>
        </label>

        <v-text-field
          id="email"
          v-model="inputs.email.value"
          class="mt-3 mb-2"
          placeholder="E-mail"
          :error-messages="inputs.email.errors"
          hint="Dica: Use o e-mail que você acessa diariamente"
          persistent-hint
          :rules="[isEmail]"
        >
          <template #prepend-inner>
            <ph-envelope-simple class="me-3" :color="gray500" size="20" />
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <div class="d-flex gap-20 mt-7">
      <app-button
        :disabled="isButtonDisabled"
        :outlined="true"
        border-color="primary"
        @click.passive="handleDiscardChanges"
      >
        <app-text as="span" size="sm" color="primary" weight="medium">Descartar</app-text>
      </app-button>

      <app-button :disabled="isButtonDisabled" class="px-10" @click="handleSaveChanges">
        <app-text as="span" size="sm" color="white" weight="medium">Salvar alterações</app-text>
      </app-button>
    </div>

    <app-modal v-model="isModalOpen" :is-closable="true" max-width="500px">
      <div class="d-flex flex-column align-center gap-4 py-5">
        <img :src="RegisterImage" alt="Registred" />
        <app-text
          class="d-block mt-8 mb-2"
          as="strong"
          size="xl"
          color="text-700"
          weight="semibold"
        >
          Alterações salvas!
        </app-text>
        <app-text as="strong" color="text-500" weight="regular">
          Suas mudanças foram salvas com sucesso
        </app-text>

        <app-button size="md" class="px-16 mt-10" @click="isModalOpen = false">
          <app-text as="strong" color="white" weight="medium">Fechar</app-text>
        </app-button>
      </div>
    </app-modal>
  </div>
</template>

<script setup lang="ts">
import { PhEnvelopeSimple, PhUser, PhPhone } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'

import RegisterImage from '@/assets/ilustrations/register.svg'

import { isEmail } from '@/utils/fieldRules'
import { useUserStore } from '@/stores/userStore'

const theme = useTheme()

const { 'gray-500': gray500 } = theme.current.value.colors

const { user } = useUserStore()

const isModalOpen = ref<boolean>(false)
const inputs = reactive({
  name: { errors: [] as string[], value: user?.name },

  email: { errors: [] as string[], value: user?.email },

  phone: { errors: [] as string[], value: user?.telefone },
})

const isButtonDisabled = computed(() => {
  if (!inputs.name.value && !inputs.email.value && !inputs.phone.value) {
    return true
  }
  return false
})

function handleDiscardChanges() {
  inputs.name.value = user.name
  inputs.email.value = user.email
  inputs.phone.value = user.telefone
}

function handleSaveChanges() {
  isModalOpen.value = true
}
</script>

<style scoped></style>
