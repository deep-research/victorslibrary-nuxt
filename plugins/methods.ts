// Global Function and Value Registration

// export default ({ app }: {app: any}, inject: any) => {
//   inject('div', (message: any) => 
//     "<div>" + message + "</div>"
//   )
// }

import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $div(message: string): void
  }
}

// Use Vue.extend and Vue.prototype.$camelCase in script
// See: https://typescript.nuxtjs.org/cookbook/plugins/
Vue.prototype.$div = (message: string) => "<div>" + message + "</div>"


// Mixin Example:
// import Vue from 'vue'
// if (!Vue.__my_mixin__) {
//   Vue.__my_mixin__ = true

//   Vue.mixin({
//     methods:{
//       addDiv(section) {
//         return "<div>" + section + "</div>"
//       }
//     }
//   })
// }
