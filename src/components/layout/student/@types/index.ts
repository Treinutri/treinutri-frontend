import { SlugRouterTypes } from '@/types/student'

interface ISubgroupItem {
  text: string
  icon: any
  url?: string
  slug?: SlugRouterTypes
  linkActive?: unknown
}
export interface IItem extends ISubgroupItem {
  subgroup?: ISubgroupItem[] | []
}
