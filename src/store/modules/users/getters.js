import { isEmpty } from 'lodash'

export default {
  isExistProfiles: state => !isEmpty(state.profiles, null),
  userRole: state => state.profiles.role,
  userData: state => state.profiles,
}
