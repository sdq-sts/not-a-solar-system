<template>
  <v-container fluid fill-height class="pa-0">
    <v-layout align-center justify-center row fill-height>
      <v-flex xs10 md5 lg5 xl3>
        <v-layout row wrap>
          <v-flex xs12>
            <LoginForm
              :loading="isLoginLoading"
              @submitLoginForm="submitLoginForm"
            />
          </v-flex>
          <v-flex xs12>
            <p class="text-xs-center mt-3">Se você não possui uma conta, <router-link :to="{ name: registerLink }">crie uma aqui</router-link></p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from '@/components/Auth/LoginForm'

export default {
  components: { LoginForm },

  data: () => ({
    registerLink: 'register'
  }),

  computed: {
    isLoginLoading () {
      return this.$store.getters.isLoginLoading
    }
  },

  methods: {
    async submitLoginForm (payload) {
      this.$store.commit('SET_LOGIN_LOADING', true)
      const result = await this.$store.dispatch('submitLoginForm', payload)
      const nextUrl = this.$route.params.nextUrl ? this.$route.params.nextUrl : '/dashboard'

      result ? this.$router.push(nextUrl) : this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
