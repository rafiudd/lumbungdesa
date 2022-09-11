import store from '@/store'

export default function guestMiddleware({ next }) {
  const { role } = store.state.users.profiles
  if (!role) return next()
  return next({ name: 'home' })
}
