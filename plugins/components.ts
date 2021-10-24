// Global Component Registration

import Vue from 'vue'
import VRuntimeTemplate from "v-runtime-template"
import Song from '@/components/song.vue'
    
const components = { 
  VRuntimeTemplate,
  Song
}
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
