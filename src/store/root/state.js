const awsBucket = process.env.NODE_ENV === 'production' ? `not-a-solar-system` : `not-a-solar-system-dev`

export const initialState = () => ({
  awsUrl: 'https://s3-sa-east-1.amazonaws.com',
  company: 'Not a solar system',
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
