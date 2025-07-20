// src/types/components.d.ts
import XtxSwiper from './XtxSwiper.vue'
import XtxGuest from './XtxGuest.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuest: typeof XtxGuest
  }
}
