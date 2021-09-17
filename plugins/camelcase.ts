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

Vue.prototype.$camelCase = (message: string) => camelCase(message)
