import { ColorTypes } from '@/plugins/vuetify'

export function getColorByCompetenceValue(number: number): ColorTypes {
  if (number < 120) {
    return 'red-300'
  } else if (number < 160) {
    return 'orange-300'
  } else {
    return 'green-300'
  }
}
