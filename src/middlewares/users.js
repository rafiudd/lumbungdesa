import vConfig from '@/config/vConfig'
import store from '@/store'

export default function userMiddleware({ next }) {
  const { role } = store.state.users.profiles
  if (role === vConfig.role.user) return next()
  return next({ name: 'landingPage' })
}
