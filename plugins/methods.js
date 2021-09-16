// Global Function and Value Registration

export default ({ app }, inject) => {
  inject('addDiv', section => 
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
