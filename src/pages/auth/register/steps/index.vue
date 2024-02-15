<template>
  <container>
    <template #content>
      <div class="h-100 d-flex flex-column justify-space-between">
        <div class="scrollable h-100 d-flex flex-column">
          <div>
            <app-button
              border-color="primary"
              outlined
              class="py-2 px-3"
              @click.passive="handleBackStep"
            >
              <ph-caret-left :size="25" :color="primaryColor" weight="light" />
            </app-button>

            <app-text class="mt-12" size="lg" as="h1">Cadastro</app-text>

            <app-text class="mt-2 d-block mb-7" size="md" as="span">
              Primeiro acesso do usuário
            </app-text>

            <app-step :current="currentStep" :steps="steps">
              <template #item.1>
                <app-box
                  background="gray-50"
                  border-color="gray-50"
                  class="mt-15 py-4 d-flex justify-center align-center mb-5"
                >
                  <ph-info :size="25" weight="light" />
                  <app-text
                    class="ms-2 d-block"
                    size="sm"
                    color="gray-600"
                    as="span"
                    weight="medium"
                  >
                    Selecione seu tipo de usuário a ser cadastrado
                  </app-text>
                </app-box>
                <div class="d-flex flex-column flex-sm-row gap-10">
                  <div
                    :class="{ 'type--selected': inputs.type.value == 'coach' }"
                    class="d-flex type flex-column align-center flex-grow-1"
                    @click="inputs.type.value = 'coach'"
                  >
                    <v-img
                      max-height="200px"
                      :lazy-src="CoachImage"
                      :src="CoachImage"
                      width="100%"
                    ></v-img>
                    <app-text class="d-block mb-2" as="strong" weight="semibold">Coach</app-text>
                  </div>
                  <div
                    :class="{ 'type--selected': inputs.type.value == 'aluno' }"
                    class="d-flex type flex-column align-center flex-grow-1"
                    @click="inputs.type.value = 'aluno'"
                  >
                    <v-img
                      max-height="200px"
                      :lazy-src="CoachImage"
                      :src="StudentImage"
                      width="100%"
                    ></v-img>
                    <app-text class="d-block mb-2" as="strong" weight="semibold">Aluno</app-text>
                  </div>
                </div>
              </template>
              <template #item.2>
                <!-- name field -->
                <label for="nome">
                  <app-text size="sm" color="gray-600" as="span" weight="medium">
                    Digite seu nome completo
                    <span class="text-red-500">*</span>
                  </app-text>
                </label>

                <v-text-field
                  id="nome"
                  v-model="inputs.name.value"
                  class="mt-3"
                  placeholder="Nome"
                  :error-messages="inputs.name.errors"
                >
                  <template #prepend-inner>
                    <ph-user class="me-3" :color="gray500" size="20" />
                  </template>
                </v-text-field>
                <!-- email field -->
                <div id="registerEmail" class="mb-5">
                  <label for="email">
                    <app-text size="sm" color="gray-600" as="span" weight="medium">
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
                </div>

                <div>
                  <label for="email_confirm">
                    <app-text size="sm" color="gray-600" as="span" weight="medium">
                      Confirme seu e-mail
                      <span class="text-red-500">*</span>
                    </app-text>
                  </label>

                  <v-text-field
                    id="email_confirm"
                    v-model="inputs.email_confirmation.value"
                    class="mt-3 mb-2"
                    placeholder="E-mail"
                    :error-messages="inputs.email_confirmation.errors"
                    :rules="[isEmail]"
                  >
                    <template #prepend-inner>
                      <ph-envelope-simple class="me-3" :color="gray500" size="20" />
                    </template>
                  </v-text-field>
                </div>

                <div>
                  <label for="phone">
                    <app-text size="sm" color="gray-600" as="span" weight="medium">
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
                </div>

                <div>
                  <label for="phone">
                    <app-text size="sm" color="gray-600" as="span" weight="medium">
                      Você se identifica como Pessoa com Deficiência (PCD)?
                      <span class="text-red-500">*</span>
                    </app-text>
                  </label>

                  <v-radio-group v-model="isPWD" class="mt-2">
                    <div class="d-flex gap-40">
                      <div class="d-flex align-center">
                        <v-radio inline :value="true" />

                        <app-text as="span" color="gray-400" class="flex-fill">Sim</app-text>
                      </div>
                      <div class="d-flex align-center">
                        <v-radio inline :value="false" />

                        <app-text as="span" color="gray-400" class="flex-fill">Não</app-text>
                      </div>
                    </div>
                  </v-radio-group>
                </div>
              </template>

              <template #item.3>
                <password-confirmation
                  @password-validated="(isValid: boolean) => (isPasswordValid = isValid)"
                  @change-password="(password: string) => (inputs.password.value = password)"
                  @change-password-confirmation="
                    (password: string) => (inputs.password_confirmation.value = password)
                  "
                />
              </template>
            </app-step>
          </div>

          <app-button
            v-if="currentStep != 3"
            :disabled="Boolean(isNextButtonDisabled)"
            full
            size="lg"
            class="mt-auto"
            @click.passive="handleNextStep"
          >
            <app-text as="strong" color="white" weight="medium">Proxima etapa</app-text>
          </app-button>

          <app-button
            v-else
            :disabled="Boolean(isCompleteButtonDisable)"
            full
            size="lg"
            class="mt-auto"
            @click.passive="handleRegister"
          >
            <app-text as="strong" color="white" weight="medium">Finalizar cadastro</app-text>
          </app-button>

          <app-modal v-model="isModalOpen" :is-closable="false" max-width="500px">
            <div class="d-flex flex-column align-center gap-4 py-5">
              <img :src="RegisterImage" alt="Registred" />
              <app-text
                class="d-block mt-8 mb-2"
                as="strong"
                size="xl"
                color="text-700"
                weight="semibold"
              >
                Cadastro realizado com sucesso!
              </app-text>
              <app-text as="strong" color="text-500" weight="regular">
                Agora você faz parte da TreiNutri.
              </app-text>

              <app-button size="md" class="px-16 mt-10" @click="handleNavigateToLogin">
                <app-text as="strong" color="white" weight="medium">Fazer login</app-text>
              </app-button>
            </div>
          </app-modal>
        </div>
      </div>
    </template>
  </container>
</template>

<script setup lang="ts">
import { PhCaretLeft, PhEnvelopeSimple, PhUser, PhPhone } from '@phosphor-icons/vue'

import { useTheme } from 'vuetify'

import Container from '../../@components/Container.vue'
import PasswordConfirmation from './@components/PasswordConfirmation.vue'

import { isEmail } from '@/utils/fieldRules'

import RegisterImage from '@/assets/ilustrations/register.svg'

import CoachImage from '@/assets/ilustrations/coach.svg'
import StudentImage from '@/assets/ilustrations/student.svg'

useSeoMeta({
  title: 'Register',
})

const router = useRouter()
const route = useRoute()

const theme = useTheme()

const { primary: primaryColor, 'gray-500': gray500 } = theme.current.value.colors

const steps = [{ name: 'Tipo' }, { name: 'Dados' }, { name: 'Segurança' }]

const currentStep = ref<number>(1)

const isModalOpen = ref<boolean>(false)

const isPasswordValid = ref<boolean>(false)

const isPWD = ref<boolean>(false)

const inputs = reactive({
  password: { errors: [] as string[], show: false, value: '' },
  password_confirmation: {
    errors: [] as string[],
    show: false,
    value: '',
  },

  name: { errors: [] as string[], value: '' },

  email: { errors: [] as string[], value: '' },
  email_confirmation: { errors: [] as string[], value: '' },

  phone: { errors: [] as string[], value: '' },
  type: {
    errors: [] as string[],
    value: route.query.tipo,
  },
})

const isNextButtonDisabled = computed(() => {
  const stepValue = currentStep.value
  if (stepValue === 2) {
    if (
      !inputs.email.value ||
      !inputs.email_confirmation.value ||
      !inputs.phone.value ||
      !inputs.name.value
    ) {
      return true
    }
    if (inputs.email.value !== inputs.email_confirmation.value) {
      inputs.email.errors = ['Emails não são iguais']
      inputs.email_confirmation.errors = ['Emails não são iguais']
      return true
    } else {
      inputs.email.errors = []
      inputs.email_confirmation.errors = []
    }
  }
})

const isCompleteButtonDisable = computed(() => {
  if (!isPasswordValid.value) {
    return true
  }
  if (!inputs.password.value && !inputs.password_confirmation.value) {
    return true
  }
  return inputs.password.value !== inputs.password_confirmation.value
})

function handleBackStep() {
  if (currentStep.value > 1) {
    currentStep.value = currentStep.value - 1
  } else {
    router.back()
  }
}
function handleNextStep() {
  if (currentStep.value < steps.length) {
    currentStep.value = currentStep.value + 1
  }
}

function handleRegister() {
  isModalOpen.value = true
}

function handleNavigateToLogin() {
  router.push({ path: '/auth/login' })
}
</script>

<style scoped lang="scss">
@use '@/styles/_mixins.scss' as mixins;
.scrollable {
  overflow: auto;
  max-height: 800px;
  padding-right: 10px;

  @include mixins.scrollStyles();
}

.type {
  border: 2px solid transparent;
  border-radius: 1.2rem;

  &--selected {
    border-color: rgb(var(--v-theme-primary));
  }
}
</style>
