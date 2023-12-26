<template>
  <div>
    <app-box
      background="gray-50"
      border-color="gray-50"
      class="mt-15 py-4 d-flex justify-center align-center mb-10"
    >
      <ph-info :size="25" weight="light" />
      <app-text class="ms-2 d-block" size="sm" color="gray-600" as="span" weight="medium">
        Digite o código enviado por e-mail
      </app-text>
    </app-box>
    <app-text as="span" color="text-800" weight="medium" class="d-block mb-2">
      Informe o código
    </app-text>
    <app-code-input
      @is-filled="
        (isFullFilled) => {
          isCodeFullFilled = isFullFilled
        }
      "
      @code-filled="
        (code) => {
          codeFilled = code
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import { PhInfo } from '@phosphor-icons/vue'
const isCodeFullFilled = ref<boolean>(false)

const codeFilled = ref<string>('')

type EmitTypes = {
  codeFilled: [code: string]
  codeFullFilled: [isFilled: boolean]
}
const emit = defineEmits<EmitTypes>()

watch(codeFilled, () => {
  emit('codeFilled', codeFilled.value)
})

watch(isCodeFullFilled, () => {
  emit('codeFullFilled', isCodeFullFilled.value)
})
</script>

<style scoped></style>
