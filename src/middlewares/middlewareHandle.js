import store from '@/store'
import vConfig from '@/config/vConfig'
import { isEmpty } from 'lodash'

function middlewarePipeline(context, middleware, index) {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) return context.next

  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1)

    nextMiddleware({ ...context, next: nextPipeline })
  }
}

async function middlewareHandle(to, from, next) {
  localStorage.setItem('prevRouter', JSON.stringify({ name: from.name, params: from.params }))
  const isExistProfiles = !isEmpty(store.state.users.profiles)
  const isExistAccessToken = localStorage.access_token || localStorage.admin_token
  const { matched } = to
  const context = { to, from, next }
  const isNextRouter = matched.length && !matched[0].meta.middlewares
  let { middlewares } = matched[0].meta

  if (isExistAccessToken && !isExistProfiles) {
    let roleByAccessToken = null
    if (localStorage.access_token) roleByAccessToken = vConfig.role.user
    if(localStorage.admin_token) roleByAccessToken = vConfig.role.admin
    if (roleByAccessToken) await store.dispatch('users/getProfilesByRole', roleByAccessToken)
  }

  if (isNextRouter) return next()
  if (to.meta.middlewares) middlewares = to.meta.middlewares
  return middlewares[0]({ ...context, next: middlewarePipeline(context, middlewares, 1) })
}

export default middlewareHandle
