// import Vue from 'vue'
import camelCase from "camelcase"

export default ({ app }, inject) => {
  inject('camelCase', str => 
    camelCase(str)
  )
}
