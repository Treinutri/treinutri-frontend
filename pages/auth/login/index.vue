<template>
  <container>
    <template #content>
      <div class="container d-flex flex-column justify-space-between h-100">
        <div>
          <app-text as="h3" size="lg">
            Seja Bem vindo a
            <app-text size="lg" as="strong" color="primary" weight="semibold">TreiNutri</app-text>
          </app-text>
          <app-text class="mt-1 d-block" weight="medium" color="gray-500" as="span">
            Faça o login e acesse a plataforma
          </app-text>
          <div>
            <v-form v-model="isFormValid" class="pt-5 mt-15">
              <label for="email">
                <app-text size="sm" color="gray-600" as="span" weight="medium">
                  Informe seu email
                </app-text>
              </label>

              <v-text-field
                id="email"
                v-model="inputs.email.valor"
                class="mt-3"
                :color="primaryColor"
                placeholder="Email"
                :error-messages="inputs.email.error_messages"
              >
                <template #prepend-inner>
                  <ph-user class="me-3" :color="gray500" size="20" />
                </template>
              </v-text-field>

              <label for="senha">
                <app-text size="sm" color="gray-600" as="span" weight="medium">
                  Informe sua senha
                </app-text>
              </label>

              <v-text-field
                id="senha"
                v-model="inputs.password.valor"
                class="mt-3"
                :type="inputs.password.show ? 'text' : 'password'"
                :color="primaryColor"
                placeholder="Senha"
                :error-messages="inputs.password.error_messages"
              >
                <template #prepend-inner>
                  <ph-key class="me-3" :color="gray500" size="20" />
                </template>

                <template #append-inner>
                  <ph-eye
                    v-if="inputs.password.show"
                    class="me-3 cursor-pointer"
                    :color="gray500"
                    size="20"
                    @click="inputs.password.show = false"
                  />
                  <ph-eye-slash
                    v-else
                    class="me-3 cursor-pointer"
                    :color="gray500"
                    size="20"
                    @click="inputs.password.show = true"
                  />
                </template>
              </v-text-field>
              <div class="d-flex justify-start">
                <NuxtLink to="/auth/password">
                  <app-text class="text-underline" as="span" color="primary">
                    Esqueceu sua senha?
                  </app-text>
                </NuxtLink>
              </div>

              <app-button
                class="d-flex justify-center py-4 mt-12"
                full
                type="button"
                background="primary"
                @click="$router.push({ path: '/aluno/home' })"
              >
                Entrar
              </app-button>
            </v-form>

            <app-button
              class="d-flex justify-center py-4 mt-5 mb-3"
              full
              border-color="primary"
              :outlined="true"
              @click="$router.push({ path: '/auth/register/steps' })"
            >
              <app-text color="black-600" weight="medium">Cadastrar-se</app-text>
            </app-button>
            <socials class="mt-auto" />
          </div>
        </div>
      </div>
    </template>
  </container>
</template>
<script setup lang="ts">
import { PhUser, PhKey, PhEye, PhEyeSlash } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'

import Container from '../@components/Container.vue'

import Socials from './@components/Socials.vue'

useHead({
  title: 'Login',
})

const theme = useTheme()
const { primary: primaryColor, 'gray-500': gray500 } = theme.current.value.colors

// const user = reactive({});

const inputs = reactive({
  password: { error_messages: [], show: false, valor: '' },
  email: { error_messages: [], valor: '' },
})

const isFormValid = ref('')
</script>

<style scoped lang="scss">
.text-bold {
  color: rgb(var(--v-theme-primary));
}

.text-finn {
  color: #171923;
  font-weight: 400;
}

.text-underline {
  font-size: 0.9rem;

  text-decoration: underline;

  cursor: pointer;

  color: rgb(var(--v-theme-primary));
}

.custom-scrollable {
  max-height: 100%;
}
</style>
