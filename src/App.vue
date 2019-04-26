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

/* DARK THEME */
.theme--light,
.theme--dark {
  &.v-table {
    background: var(--accent);
  }

  &.v-sheet {
    background: transparent;
  }

  &.v-table tbody tr:hover:not(.v-datatable__expand-row) {
    background: var(--accent-hover);
  }

  &.v-pagination {
    .v-pagination__navigation,
    .v-pagination__item {
      background: var(--accent);
    }
  }
}

/* LIGHT THEME */
// .theme--light {
//   &.v-table,
//   &.v-list {
//     background: var(--accent);
//   }

//   &.v-pagination {
//     .v-pagination__navigation,
//     .v-pagination__item {
//       background: var(--accent);
//     }
//   }

// }

/* STYLES */
.v-card {
  border-radius: 6px;
}
</style>
