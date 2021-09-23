// Global Component Registration

import Vue from 'vue'
import VRuntimeTemplate from "v-runtime-template"
    
const components = { 
  VRuntimeTemplate
}
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
