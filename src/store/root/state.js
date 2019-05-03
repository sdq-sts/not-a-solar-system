const awsUrl = process.env.VUE_APP_AWS_URL
const company = process.env.VUE_APP_COMPANY_NAME
const awsBucket = process.env.NODE_ENV === 'production'
  ? process.env.VUE_APP_PROD_BUCKET
  : process.env.VUE_APP_DEV_BUCKET

export const initialState = () => ({
  awsUrl,
  company,
  awsBucket,
  user: {},
  userId: '',
  username: '',
  userEmail: '',
  userAvatar: '',
  defaultAvatar: require('@/assets/default_avatar.png'),
  isLoggedIn: false,
  jwt: '',
  darkMode: false,
  snackbar: false,
  snackbarText: '',
  snackbarColor: 'info',
  snackbarTimeout: 2000
})

export const state = { ...initialState() }
