<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center row fill-height>
      <v-flex md5 lg5 xl3>
        <v-layout column fill-height>
          <v-flex xs3>
            <RegisterForm
              @submitRegisterForm="submitRegisterForm"
              @clearFormAlerts="clearFormAlerts"
            />
          </v-flex>

          <v-flex xs3>
            <v-alert
              class="mt-2"
              :value="alert"
              :type="alertType"
              transition="slide-y-reverse-transition"
            >{{ alertText }}
            </v-alert>
          </v-flex>

          <v-flex xs3>
            <p class="text-xs-center mt-3">Se você já possui uma conta, <router-link :to="{ name: loginLink  }">faça o login aqui</router-link></p>
          </v-flex>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import RegisterForm from '@/components/Auth/RegisterForm'

export default {
  components: { RegisterForm },

  data: () => ({
    loginLink: 'login',
    alert: false,
    alertText: '',
    alertType: 'success'
  }),

  methods: {
    async submitRegisterForm (payload) {
      const result = await this.$store.dispatch('submitRegisterForm', payload)
      const error = result.response ? result.response : false

      if (error && error.status === 422) {
        this.showAlert('O email já existe.', 'error')
      } else if (result.status === 201) {
        this.showAlert('Usuário cadastrado com sucesso', 'success')
        this.redirectToLoginPage()
      }
    },
    showAlert (text, type) {
      this.alertText = text
      this.alertType = type
      this.alert = true
    },
    redirectToLoginPage (time = 1500) {
      setTimeout(() => { this.$router.push({ name: 'login' }) }, time)
    },
    clearFormAlerts () {
      this.alert = false
    }
  }
}
</script>

<style>

</style>
