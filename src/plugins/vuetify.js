import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@/assets/stylus/main.styl'
import { darkThemeColors } from '@/utils/themeColors'

Vue.use(Vuetify, { theme: darkThemeColors })
