<template>
  <v-badge
    :dot="true"
    location="bottom right"
    :offset-x="3"
    :offset-y="3"
    color="success"
    :bordered="true"
  >
    <v-avatar style="cursor: pointer" color="primary" variant="tonal">
      <v-img :size="52" src="https://cdn.vuetifyjs.com/images/john.jpg" />

      <!-- SECTION Menu -->
      <v-menu activator="parent" width="230" location="bottom end" offset="14px">
        <v-list>
          <!-- 👉 User Avatar & Name -->
          <v-list-item>
            <template #prepend>
              <v-list-item-action start>
                <v-badge
                  :dot="true"
                  location="bottom right"
                  :offset-x="3"
                  :offset-y="3"
                  color="success"
                  :bordered="true"
                >
                  <v-avatar color="primary" size="40" variant="tonal">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                  </v-avatar>
                </v-badge>
              </v-list-item-action>
            </template>

            <v-list-item-title class="font-weight-semibold">João</v-list-item-title>
            <v-list-item-subtitle>1234</v-list-item-subtitle>
          </v-list-item>

          <v-divider class="my-2" />

          <!-- 👉 Meu Perfil -->
          <v-list-item to="/aluno/perfil">
            <template #prepend>
              <v-icon class="me-2" :icon="PhUser" size="22" />
            </template>

            <v-list-item-title>Meu Perfil</v-list-item-title>
          </v-list-item>
          <!-- Notifications on mobile -->
          <v-list-item v-if="isMobileDevice" to="">
            <template #prepend>
              <v-icon class="me-2" :icon="PhUser" size="22" />
            </template>

            <v-list-item-title>Notificações</v-list-item-title>
          </v-list-item>

          <v-list-item to="/aluno/assinatura">
            <template #prepend>
              <v-icon class="me-2" :icon="PhCreditCard" size="22" />
            </template>

            <v-list-item-title>Assinatura</v-list-item-title>
          </v-list-item>

          <!-- 👉 contato -->
          <v-list-item to="/app/contato">
            <template #prepend>
              <v-icon class="me-2" :icon="PhQuestion" size="22" />
            </template>

            <v-list-item-title>Contato</v-list-item-title>
          </v-list-item>

          <!-- Divider -->
          <v-divider class="my-2" />

          <!-- 👉 Logout -->
          <v-list-item @click="$emit('logout')">
            <template #prepend>
              <v-icon class="me-2" :icon="PhSignOut" size="22" />
            </template>

            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- !SECTION -->
    </v-avatar>
  </v-badge>
</template>

<script setup lang="ts">
import { PhUser, PhSignOut, PhQuestion, PhCreditCard } from '@phosphor-icons/vue'
import { useDisplay } from 'vuetify'

const { smAndDown: isMobileDevice } = useDisplay()

type EmitTypes = {
  logout: []
}
defineEmits<EmitTypes>()
</script>
