// Global Component Registration

import Vue from 'vue'
import VRuntimeTemplate from "v-runtime-template"

import song from '~/components/song.vue'
import blogPost from '~/components/blogPost.vue'
    
const components = { 
  VRuntimeTemplate,
  song,
  blogPost
}
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
