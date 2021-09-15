import Vue from 'vue'
Vue.mixin({
    methods:{
      addDiv(section) {
        return "<div>" + section + "</div>"
      }
    }
})
