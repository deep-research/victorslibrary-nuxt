// import Vue from 'vue'
// import camelCase from "camelcase"

// export default ({ app }, inject) => {
//   inject('camelCase', str => 
//     camelCase(str)
//   )
// }

import Vue from 'vue'
import camelCase from "camelcase"

declare module 'vue/types/vue' {
  interface Vue {
    $camelCase(message: string): void
  }
}

// Use Vue.extend and Vue.prototype.$camelCase in script
// See: https://typescript.nuxtjs.org/cookbook/plugins/
Vue.prototype.$camelCase = (message: string) => camelCase(message)
