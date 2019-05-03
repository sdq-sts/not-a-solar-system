<template>
  <v-app
    :dark="darkMode"
    :style="{
      '--accent': $vuetify.theme.accent,
      '--accent-hover': $vuetify.theme.accentHover,
      'background': $vuetify.theme.bgColor
    }"
  >
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

<style lang="scss">
:root {
  --accent: transparent;
  --accent-hover: transparent;
}

/* THEME */
.theme--light,
.theme--dark {
  &.list-bg {
    background: var(--accent)!important;
  }

  &.v-table {
    background-color: var(--accent)!important;
  }

  &.v-sheet {
    background: var(--accent)!important;
  }

  &.v-table tbody tr:hover:not(.v-datatable__expand-row) {
    background: var(--accent-hover)!important;
  }

  &.v-pagination {
    .v-pagination__navigation,
    .v-pagination__item:not(.v-pagination__item--active) {
      background: var(--accent)!important;
    }
  }
}

/* STYLES */
.v-card {
  border-radius: 6px!important;
}
</style>
