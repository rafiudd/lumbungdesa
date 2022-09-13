import * as types from './mutation-types'
// import UsersService from '@/services/UsersService'

export const setProfiles = ({ commit }, profiles) => {
  commit(types.SET_PROFILES, profiles)
}
// export const getProfilesByRole = async ({ commit }, role) => {
//   try {
//     let response = null
//     const token = localStorage.access_token || localStorage.admin_token
//     if (role && token) {
//       response = await UsersService.getMe()
//     }
//     if (response && response.data.data) {
//       const profiles = { ...response.data.data.userDetail, role }
//       commit(types.SET_PROFILES, profiles)
//     }
//     if(response.data.code === 500){
//       // eslint-disable-next-line no-console
//       removeProfiles({commit})
//     }
//   } catch (error) {
//     throw error
//   }
// }

export const removeProfiles = ({ commit }) => {
  window.localStorage.clear()
  commit(types.SET_PROFILES, {})
}

export default {
  setProfiles,
  // getProfilesByRole,
  removeProfiles,
}
