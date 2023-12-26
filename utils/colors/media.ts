import { ColorTypes } from '@/plugins/vuetify'

export function getColorByMediaValue(number: number): ColorTypes {
  if (number) {
    if (number < 560) {
      return 'red-300'
    } else if (number < 800) {
      return 'orange-300'
    } else {
      return 'green-300'
    }
  }

  return 'white'
}

export function getBgByMediaValue(number: number): ColorTypes {
  if (number) {
    if (number < 560) {
      return 'red-50'
    } else if (number < 800) {
      return 'orange-50'
    } else {
      return 'green-50'
    }
  }
  return 'primary'
}
