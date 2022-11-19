import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "index"
declare module "D:/MyCode/MyCode/work_code/nuxt3-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}