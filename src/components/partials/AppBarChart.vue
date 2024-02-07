<template>
  <div>
    <bar-chart :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { Bar as BarChart } from 'vue-chartjs'

import { Chart as ChartJS, registerables, ChartData, ChartOptions } from 'chart.js'
import { chartOptions } from '@/utils/chart/index'

ChartJS.register(...registerables)

const options = {
  ...(chartOptions as ChartOptions<'bar'>),
  borderRadius: 40,
}

interface IBarChart {
  data?: ChartData<'bar'>
}

withDefaults(defineProps<IBarChart>(), {
  data: () => {
    return {
      labels: [],
      datasets: [],
    }
  },
})
</script>

<style scoped></style>
