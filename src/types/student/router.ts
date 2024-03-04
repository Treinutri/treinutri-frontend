import { PageMeta } from 'nuxt/app'

export type SlugRouterTypes = 'home' | 'ia' | 'dashboard' | 'perfil' | 'sair'

export type CustomLayouts = 'default' | 'student-view-layout' | 'coach-view-layout'

interface MyCustomMetadata {
  activeNavLink: SlugRouterTypes
  headerText: string
  bannerSrc?: string
  bannerTitle: string
  bannerSubtitle: string
}
export interface IPageMeta extends Partial<PageMeta>, MyCustomMetadata {}
