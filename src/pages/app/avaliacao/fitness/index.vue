<template>
  <div class="mt-15">
    <div class="d-flex flex-column align-center header">
      <app-text as="strong" size="3xl" class="d-block">Avaliação Fitness</app-text>
      <app-text size="lg" weight="medium" color="text-600" class="d-block mt-3">
        Uma Calculadora de fitness para calcular muitas métricas como IMC, TMB, BFP, peso ideal e
        muito mais.
      </app-text>
    </div>

    <div>
      <ul class="list">
        <li class="d-flex align-center">
          <ph-check-circle :color="green300" weight="fill" size="25" />
          IMC - Índice de massa corpórea
        </li>
        <li class="d-flex align-center">
          <ph-check-circle :color="green300" weight="fill" size="25" />
          Porcentagem de gordura
        </li>
        <li class="d-flex align-center">
          <ph-check-circle :color="green300" weight="fill" size="25" />
          Massa Corporal Magra
        </li>
        <li class="d-flex align-center">
          <ph-check-circle :color="green300" weight="fill" size="25" />
          Despesa Diária de Energia em Repouso
        </li>
        <li class="d-flex align-center">
          <ph-check-circle :color="green300" weight="fill" size="25" />
          Gasto total diário de energia
        </li>
        <li class="d-flex align-center">
          <ph-check-circle :color="green300" weight="fill" size="25" />
          Peso ideal
        </li>
        <li class="d-flex align-center">
          <ph-check-circle :color="green300" weight="fill" size="25" />
          Tempo médio até o objetivo
        </li>
        <li class="d-flex align-center">
          <ph-check-circle :color="green300" weight="fill" size="25" />
          Relação Cintura Quadril - Risco de doenças Cardíacas
        </li>
      </ul>
    </div>

    <section class="mt-10">
      <app-text as="strong" weight="semibold" class="d-block mb-6">
        Calcule as suas métricas abaixo:
      </app-text>

      <label for="weight">
        <app-text as="strong" weight="medium" color="text-600">Seu peso em KG</app-text>
      </label>
      <v-text-field
        id="weight"
        v-model="inputs.weight.value"
        class="mt-3"
        variant="solo"
        placeholder="Insira em KG"
        :error-messages="inputs.weight.errors"
      ></v-text-field>

      <label for="height">
        <app-text as="strong" weight="medium" color="text-600">Sua altura em metro</app-text>
      </label>
      <v-text-field
        id="height"
        v-model="inputs.height.value"
        variant="solo"
        class="mt-1"
        placeholder="Insira em metros"
        :error-messages="inputs.height.errors"
      ></v-text-field>

      <label for="age">
        <app-text as="strong" weight="medium" color="text-600">Sua idade</app-text>
      </label>
      <v-text-field
        id="age"
        v-model="inputs.height.value"
        variant="solo"
        class="mt-1"
        placeholder="Insira a idade"
        :error-messages="inputs.height.errors"
      ></v-text-field>

      <label for="neck">
        <app-text as="strong" weight="medium" color="text-600">
          Medida circuferencia do pescoço em cm
        </app-text>
      </label>
      <v-text-field
        id="neck"
        v-model="inputs.height.value"
        variant="solo"
        class="mt-1"
        placeholder="Insira a medida em cm"
        :error-messages="inputs.height.errors"
      ></v-text-field>

      <label for="hip">
        <app-text as="strong" weight="medium" color="text-600">
          Medida circuferencia do quadril em cm
        </app-text>
      </label>
      <v-text-field
        id="hip"
        v-model="inputs.height.value"
        variant="solo"
        class="mt-1"
        placeholder="Insira a medida em cm"
        :error-messages="inputs.height.errors"
      ></v-text-field>

      <label for="waist">
        <app-text as="strong" weight="medium" color="text-600">
          Medida da sua cintura em cm
        </app-text>
      </label>
      <v-text-field
        id="waist"
        v-model="inputs.height.value"
        variant="solo"
        class="mt-1"
        placeholder="Insira a medida em cm"
        :error-messages="inputs.height.errors"
      ></v-text-field>

      <label for="activityLevel">
        <app-text as="strong" weight="medium" color="text-600">
          Seu nível de atividade diária
        </app-text>
      </label>
      <v-select
        id="activityLevel"
        placeholder="Selecione o Nível"
        :items="['Bem pouco', 'Pouco', 'Moderado', 'Movimentado', 'Bem movimentado']"
        variant="solo"
      ></v-select>

      <label for="defict">
        <app-text as="strong" weight="medium" color="text-600">
          Défict calórico (Padrão 500)
        </app-text>
      </label>
      <v-text-field
        id="defict"
        v-model="inputs.height.value"
        variant="solo"
        class="mt-1"
        placeholder="Insira Défict calórico "
        :error-messages="inputs.height.errors"
      ></v-text-field>

      <label for="futureWeight">
        <app-text as="strong" weight="medium" color="text-600">Peso que quer chegar</app-text>
      </label>
      <v-text-field
        id="futureWeight"
        v-model="inputs.height.value"
        variant="solo"
        class="mt-1"
        placeholder="Insira o peso  KG"
        :error-messages="inputs.height.errors"
      ></v-text-field>

      <label for="radio">
        <app-text as="strong" weight="medium" color="text-600">Sexo</app-text>
      </label>
      <v-radio-group id="radio" v-model="inputs.gender.value" class="mt-2">
        <div class="d-flex gap-40">
          <div class="d-flex align-center">
            <v-radio inline :value="true" />

            <app-text as="span" color="gray-400" class="flex-fill">Masculino</app-text>
          </div>
          <div class="d-flex align-center">
            <v-radio inline :value="false" />

            <app-text as="span" color="gray-400" class="flex-fill">Feminino</app-text>
          </div>
        </div>
      </v-radio-group>

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
import { PhCheckCircle } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'

definePageMeta({
  layout: 'app-view-layout',
})

const inputs = reactive({
  weight: { errors: [] as string[], value: '' },
  height: { errors: [] as string[], value: '' },
  gender: { errors: [] as string[], value: '' },
})

const theme = useTheme()

const { 'green-300': green300 } = theme.current.value.colors
</script>

<style lang="scss" scoped>
.header {
  margin-top: 8rem;
  margin-bottom: 5rem;
}

.list {
  list-style-type: none;

  li {
    margin-bottom: 0.5rem;
    gap: 5px;

    font-weight: 500;
  }
}
</style>
