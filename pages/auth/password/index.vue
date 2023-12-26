<template>
  <container>
    <template #content>
      <div class="h-100 d-flex flex-column justify-space-between">
        <div>
          <app-button
            border-color="primary"
            outlined
            class="py-2 px-3"
            @click="$router.push('/auth/login')"
          >
            <ph-caret-left :size="25" :color="primaryColor" weight="light" />
          </app-button>

          <app-text class="mt-12" size="lg" as="h1">Recuperar senha</app-text>

          <app-text class="mt-2" size="md" as="span" weight="medium" color="subtitle">
            Complete as etapas e redefina sua senha
          </app-text>

          <app-box
            background="gray-50"
            border-color="gray-50"
            class="mt-15 py-4 d-flex justify-center align-center"
          >
            <ph-info :size="25" weight="light" />
            <app-text class="ms-2 d-block" size="sm" color="gray-600" as="span" weight="medium">
              Informe seu email cadastrado na plataforma
            </app-text>
          </app-box>

          <div class="mt-14">
            <label for="email">
              <app-text as="span" color="gray-600">Email</app-text>
            </label>
            <v-text-field
              id="email"
              v-model="inputs.email.value"
              class="mt-3"
              placeholder="Email"
              :error-messages="inputs.email.errors"
            >
              <template #prepend-inner>
                <ph-user class="me-3" :color="gray500" size="20" />
              </template>
            </v-text-field>
          </div>
        </div>
        <app-button
          :disabled="!inputs.email.value"
          full
          size="lg"
          class="mt-auto"
          @click="handleNavigatePasswordRecoverSteps"
        >
          <app-text as="strong" color="white" weight="medium">Próxima etapa</app-text>
        </app-button>
      </div>
    </template>
  </container>
</template>

<script setup lang="ts">
import { PhCaretLeft, PhInfo, PhUser } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'
import Container from '../@components/Container.vue'

useSeoMeta({
  title: 'Password Recover',
})

const router = useRouter()

const theme = useTheme()
const { primary: primaryColor, 'gray-500': gray500 } = theme.current.value.colors

const inputs = reactive({
  email: { errors: [], show: false, value: '' },
})

function handleNavigatePasswordRecoverSteps() {
  router.push({ path: '/auth/password/recover' })
}
</script>

<style scoped lang="scss"></style>
