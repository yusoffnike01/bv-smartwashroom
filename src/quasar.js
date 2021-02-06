import Vue from 'vue'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify, LoadingBar } from 'quasar'

Vue.use(Quasar, {
  config: {
    loadingBar: {
      color: 'blue'
    },
    


  },

  plugins: {
    Notify,
    LoadingBar
  }
 })
