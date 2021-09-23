// Global Function and Value Registration

export default ({ app }: {app: any}, inject: any) => {
  inject('div', (section: any) => 
    "<div>" + section + "</div>"
  )
}

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
