<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="mb-0">
        <label for="senha">
          <app-text size="sm" color="text-600" as="span" weight="medium">Senha atual</app-text>
        </label>

        <v-text-field
          id="senha"
          v-model="inputs.currentPassword.value"
          class="mt-3"
          :type="inputs.currentPassword.show ? 'text' : 'password'"
          placeholder="Digite sua Senha"
          :error-messages="inputs.password.errors"
        >
          <template #prepend-inner>
            <ph-key class="me-3" :color="gray500" size="20" />
          </template>

          <template #append-inner>
            <ph-eye
              v-if="!inputs.currentPassword.show"
              class="me-3 cursor-pointer"
              :color="gray500"
              size="20"
              @click="inputs.currentPassword.show = true"
            />
            <ph-eye-slash
              v-else
              class="me-3 cursor-pointer"
              :color="gray500"
              size="20"
              @click="inputs.currentPassword.show = false"
            />
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="pt-0">
        <label for="senha">
          <app-text size="sm" color="text-600" as="span" weight="medium">Nova senha</app-text>
        </label>

        <v-form v-model="isPasswordValid">
          <v-text-field
            id="senha"
            v-model="inputs.password.value"
            class="mt-3"
            :type="inputs.password.show ? 'text' : 'password'"
            placeholder="Digite sua Senha"
            :error-messages="inputs.password.errors"
            :rules="passwordRulesArray"
          >
            <template #prepend-inner>
              <ph-key class="me-3" :color="gray500" size="20" />
            </template>

            <template #append-inner>
              <ph-eye
                v-if="!inputs.password.show"
                class="me-3 cursor-pointer"
                :color="gray500"
                size="20"
                @click="inputs.password.show = true"
              />
              <ph-eye-slash
                v-else
                class="me-3 cursor-pointer"
                :color="gray500"
                size="20"
                @click="inputs.password.show = false"
              />
            </template>
          </v-text-field>
        </v-form>

        <div class="d-flex align-center mt-2">
          <ph-info size="50" :color="gray500" class="me-3" />
          <app-text as="p" color="text-300" size="sm">
            Sua senha deve ter no mínimo 8 caracteres, incluindo pelo menos 1 letra maiúscula, 1
            letra minúscula e 1 caractere especial (-!@#$%^&*).
          </app-text>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="pt-0">
        <label for="senha">
          <app-text size="sm" color="text-600" as="span" weight="medium">
            Confirmar nova senha
          </app-text>
        </label>

        <v-form v-model="isPasswordConfirmationValid">
          <v-text-field
            id="senha"
            v-model="inputs.password_confirmation.value"
            class="mt-3"
            :type="inputs.password_confirmation.show ? 'text' : 'password'"
            placeholder="Digite sua Senha"
            :error-messages="inputs.password.errors"
            :rules="passwordRulesArray"
          >
            <template #prepend-inner>
              <ph-key class="me-3" :color="gray500" size="20" />
            </template>

            <template #append-inner>
              <ph-eye
                v-if="!inputs.password_confirmation.show"
                class="me-3 cursor-pointer"
                :color="gray500"
                size="20"
                @click="inputs.password_confirmation.show = true"
              />
              <ph-eye-slash
                v-else
                class="me-3 cursor-pointer"
                :color="gray500"
                size="20"
                @click="inputs.password_confirmation.show = false"
              />
            </template>
          </v-text-field>
        </v-form>
      </v-col>
    </v-row>

    <div class="d-flex gap-20 mt-7">
      <app-button
        :disabled="isButtonDiscardDisabled"
        :outlined="true"
        border-color="primary"
        @click.passive="handleDiscardChanges"
      >
        <app-text as="span" size="sm" color="primary" weight="medium">Descartar</app-text>
      </app-button>

      <app-button :disabled="isButtonConfirmDisabled" class="px-10" @click="handleSaveChanges">
        <app-text as="span" size="sm" color="white" weight="medium">Salvar alterações</app-text>
      </app-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhKey, PhEye, PhEyeSlash, PhInfo } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'

import { useUserStore } from '@/stores/userStore'

import { passwordRulesArray } from '@/utils/fieldRules'

const { user } = useUserStore()

const theme = useTheme()

const { 'gray-500': gray500 } = theme.current.value.colors

const inputs = reactive({
  currentPassword: { errors: [], show: false, value: user?.password },
  password: { errors: [], show: false, value: '' },
  password_confirmation: { errors: [], show: false, value: '' },
})

const isButtonDiscardDisabled = computed(() => {
  if (!inputs.password.value && !inputs.password_confirmation.value) {
    return true
  }
  return false
})

const isPasswordValid = ref<boolean>(false)
const isPasswordConfirmationValid = ref<boolean>(false)
const isButtonConfirmDisabled = computed(() => {
  if (
    inputs.password.value &&
    inputs.password_confirmation.value &&
    inputs.password_confirmation.value === inputs.password.value &&
    isPasswordValid &&
    isPasswordConfirmationValid
  ) {
    return false
  }
  return true
})

function handleDiscardChanges() {
  inputs.currentPassword.value = user.password
  inputs.password.value = ''
  inputs.password_confirmation.value = ''
}

function handleSaveChanges() {}
</script>

<style scoped></style>
