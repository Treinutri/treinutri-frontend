<template>
  <app-box class="pa-4 d-flex align-center gap-20" background="orange-50" border-color="orange-100">
    <img width="70px" :src="TreyImg" alt="Trei logo" />
    <div>
      <app-text as="strong" size="1xl" class="d-block mb-2">Dica do dia da trei</app-text>

      <app-text weight="medium" color="text-700">
        Experimente intercalar treinos de alta intensidade com períodos de descanso ativo para
        otimizar a queima de gordura e ganho de massa muscular. Não se esqueça de manter uma
        alimentação balance
      </app-text>
    </div>
  </app-box>
</template>

<script setup lang="ts">
import TreyImg from '@/assets/trey.png'
</script>

<style scoped></style>
