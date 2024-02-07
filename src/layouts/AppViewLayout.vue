<template>
  <v-layout class="layout">
    <app-header></app-header>

    <v-main>
      <app-container>
        <slot></slot>
      </app-container>
    </v-main>
    <footer class="footer">
      <app-container class="footer__content">
        <img :src="WhiteLogo" alt="logo" />
        <app-text as="span" color="text-200">
          © 2023 TreiNutri. Todos os direitos reservados.
        </app-text>
        <app-text as="span" color="text-200">Powered by Asaas.</app-text>
      </app-container>
    </footer>
  </v-layout>
</template>

<script setup>
import WhiteLogo from '@/assets/white_logo.png'
import AppContainer from '@/components/layout/app/AppContainer.vue'
import AppHeader from '@/components/layout/app/AppHeader.vue'
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(var(--v-theme-background-app));
}

.transparent {
  background: transparent;
}

.footer {
  padding-block: 1rem;

  background-color: rgb(var(--v-theme-gray-900));

  img {
    max-width: 120px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
