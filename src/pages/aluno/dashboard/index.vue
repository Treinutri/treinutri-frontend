<template>
  <div>
    <app-trei-info></app-trei-info>
    <section class="mt-10">
      <app-text as="h4" class="mb-3">Pendências</app-text>

      <app-box class="pa-4" border-color="red-50">
        <div class="d-flex align-center gap-20">
          <app-button is-fab background="red-300" rounded>
            <ph-warning size="25" />
          </app-button>
          <div>
            <app-text as="span" color="red-500" weight="medium">
              Você tem feedbacks para responder
            </app-text>

            <app-button class="mt-5" size="sm" border-color="red-500" outlined>
              <app-text as="span" color="red-500" size="sm">Ver Feedback</app-text>
            </app-button>
          </div>
        </div>
      </app-box>

      <app-box class="pa-4 mt-5" border-color="red-50">
        <div class="d-flex align-center gap-20">
          <app-button is-fab background="red-300" rounded>
            <ph-warning size="25" />
          </app-button>
          <div>
            <app-text as="span" color="red-500" weight="medium">
              Você tem Avaliações para responder
            </app-text>

            <app-button class="mt-5" size="sm" border-color="red-500" outlined>
              <app-text as="span" color="red-500" size="sm">Ver Avaliações</app-text>
            </app-button>
          </div>
        </div>
      </app-box>
    </section>

    <section class="mt-10">
      <app-text as="h4" class="mb-3">Seus dados</app-text>

      <v-row>
        <v-col cols="12" md="6">
          <app-box class="pa-4">
            <div class="d-flex align-center gap-20">
              <app-button is-fab background="blue-400" rounded>
                <ph-barbell size="25" />
              </app-button>
              <div>
                <app-text as="span" color="text-900" weight="semibold" class="d-block mb-3">
                  Treinos
                </app-text>

                <app-text as="span" color="text-900" weight="regular">48 Treinos</app-text>
              </div>
            </div>
          </app-box>
        </v-col>
        <v-col cols="12" md="6">
          <app-box class="pa-4">
            <div class="d-flex align-center gap-20">
              <app-button is-fab background="red-400" rounded>
                <ph-warning size="25" />
              </app-button>
              <div>
                <app-text as="span" color="text-900" weight="semibold" class="d-block mb-3">
                  Feedbacks
                </app-text>

                <app-text as="span" color="text-900" weight="regular">7 Feedbacks</app-text>
              </div>
            </div>
          </app-box>
        </v-col>

        <v-col cols="12" md="6">
          <app-box class="pa-4">
            <div class="d-flex align-center gap-20">
              <app-button is-fab background="orange-400" rounded>
                <ph-info size="25" />
              </app-button>
              <div>
                <app-text as="span" color="text-900" weight="semibold" class="d-block mb-3">
                  Peso
                </app-text>

                <app-text as="span" color="text-900" weight="regular">50 kg</app-text>
              </div>
            </div>
          </app-box>
        </v-col>
        <v-col cols="12" md="6">
          <app-box class="pa-4">
            <div class="d-flex align-center gap-20">
              <app-button is-fab background="green-400" rounded>
                <ph-info size="25" />
              </app-button>
              <div>
                <app-text as="span" color="text-900" weight="semibold" class="d-block mb-3">
                  Altura
                </app-text>

                <app-text as="span" color="text-900" weight="regular">1,65</app-text>
              </div>
            </div>
          </app-box>
        </v-col>
      </v-row>
    </section>

    <section class="mt-10">
      <app-text as="h4" class="mb-3">Sua consultoria</app-text>

      <app-box class="pa-4">
        <div class="d-flex align-center gap-20">
          <v-avatar size="80">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <div>
            <div class="d-flex justify-end">
              <v-rating v-model="rating" class="ms-auto" disabled half-increments></v-rating>
            </div>
            <app-text as="span" color="text-900" weight="semibold" class="d-block mb-3">
              Coach Principal
            </app-text>

            <app-text as="span" color="text-900" weight="regular">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsa quae at. A
              animi veniam sunt magni pariatur omnis veritatis odio! Accusantium officia velit
              mollitia ducimus quisquam quod sapiente repellendus.
            </app-text>
          </div>
        </div>
      </app-box>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PhWarning, PhBarbell, PhInfo } from '@phosphor-icons/vue'
import { IPageMeta } from '@/types/student'

definePageMeta({
  layout: 'student-view-layout',
  activeNavLink: 'dashboard',
  headerText: 'Início',
} as IPageMeta)

const rating = ref<number>(5)
</script>

<style scoped></style>
