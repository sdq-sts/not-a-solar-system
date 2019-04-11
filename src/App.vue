<template>
  <v-app :dark="darkMode">
    <v-content>
      <router-view/>

      <v-snackbar
        v-model="snackbar"
        :right="true"
        :bottom="true"
        :timeout="2000"
        :color="snackbarColor"
      >{{ snackbarText }}</v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { darkThemeColors, lightThemeColors } from '@/utils/themeColors'

export default {
  name: 'App',
  components: {},

  data: () => ({}),

  computed: {
    ...mapGetters([
      'snackbarText',
      'snackbarColor',
      'darkMode'
    ]),
    snackbar: {
      get () {
        return this.$store.getters.snackbar
      },
      set (value) {
        this.$store.commit('SET_SNACKBAR', value)
      }
    }
  },

  watch: {
    darkMode: {
      handler: 'watchDarkMode',
      immediate: true
    }
  },

  methods: {
    watchDarkMode (isDarkMode) {
      if (isDarkMode) {
        Object.assign(this.$vuetify.theme, darkThemeColors)
      } else {
        Object.assign(this.$vuetify.theme, lightThemeColors)
      }
    }
  },

  mounted () {
    const isDarkMode = (localStorage.isDarkMode === 'true')

    this.$store.commit('SET_DARK_MODE', isDarkMode)
  }
}
</script>

<style>

</style>