// Global Component Registration

import Vue from 'vue'
import VRuntimeTemplate from "v-runtime-template"

import song from '~/components/song.vue'
import post from '~/components/post.vue'
    
const components = { 
  VRuntimeTemplate,
  song,
  post
}
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
