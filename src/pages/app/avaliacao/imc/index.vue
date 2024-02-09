<template>
  <div class="mt-15">
    <div class="d-flex flex-column align-center header">
      <app-text as="strong" size="3xl" class="d-block">Avaliação de IMC</app-text>
      <app-text size="lg" weight="medium" color="text-600" class="d-block mt-3">
        IMC (Índice de Massa Corpórea) é uma medida internacional usada para avaliar nosso peso
        ideal. Seu cálculo é feito dividindo-se o peso pela altura elevada ao quadrado.
      </app-text>
    </div>
    <section>
      <app-text as="strong" weight="semibold" class="d-block">Calcule o seu IMC abaixo:</app-text>

      <v-text-field
        id="nome"
        v-model="inputs.weight.value"
        class="mt-3"
        variant="solo"
        placeholder="Seu peso em KG"
        :error-messages="inputs.weight.errors"
      ></v-text-field>

      <v-text-field
        id="nome"
        v-model="inputs.height.value"
        variant="solo"
        class="mt-1"
        placeholder="Sua altura em metro"
        :error-messages="inputs.height.errors"
      ></v-text-field>

      <div class="d-flex justify-center">
        <app-button rounded="xl" class="my-6 px-4">Calcular</app-button>
      </div>

      <small class="d-block mb-10 mt-6">
        *Lembre-se de procurar um profissional para avaliar melhor seus resultados, o IMC é apenas
        uma variável avaliada sobre sua saúde, não utilize apenas ele como parâmetro principal.
      </small>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'app-view-layout',
})

const inputs = reactive({
  weight: { errors: [] as string[], value: '' },
  height: { errors: [] as string[], value: '' },
})
</script>

<style lang="scss" scoped>
.header {
  margin-top: 8rem;
  margin-bottom: 5rem;
}
</style>
