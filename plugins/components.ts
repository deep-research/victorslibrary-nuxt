// Global Component Registration

import Vue from 'vue'
import VRuntimeTemplate from "v-runtime-template"

import Song from '../components/Song.vue'
import Post from '../components/Post.vue'
    
const components = { 
  VRuntimeTemplate,
  Song,
  Post
}
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
