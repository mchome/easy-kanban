import Firebase from './firebase'
import md5 from 'blueimp-md5'

function getAvatar (email) {
  // return 'https://secure.gravatar.com/avatar/' + md5(email) + '?size=400'
  return 'https://cdn.v2ex.com/gravatar/' + md5(email)
}

export {
  Firebase,
  getAvatar
}
