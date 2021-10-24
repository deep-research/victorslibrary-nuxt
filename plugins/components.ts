// Global Component Registration

import Vue from 'vue'
import VRuntimeTemplate from "v-runtime-template"
import song from '@/components/song.vue'
import postInfo from '@/components/post-info.vue'
    
const components = { 
  VRuntimeTemplate,
  song,
  postInfo
}
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
