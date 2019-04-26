import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@/assets/stylus/main.styl'
import { darkThemeColors } from '@/utils/themeColors'

Vue.use(Vuetify, { theme: darkThemeColors })
