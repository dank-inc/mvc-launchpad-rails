import { LoginData } from 'types/Auth'
import moment from 'moment'

export const getHeaders = () => {
  return { headers: { Authorization: getTokenFromLocalStorage() } }
}

export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('mvc-mvp-jwt-token')
}

export const getUserFromLocalStorage = (): LoginData | null => {
  const id = window.localStorage.getItem('mvc-mvp-jwt-id')
  const username = window.localStorage.getItem('mvc-mvp-jwt-username')
  const token = window.localStorage.getItem('mvc-mvp-jwt-token')
  const exp = window.localStorage.getItem('mvc-mvp-jwt-exp')

  return id && username && token && exp && moment(exp) > moment()
    ? { id, username, token, exp }
    : null
}

export const setLocalStorageToken = (data: LoginData) => {
  window.localStorage.setItem('mvc-mvp-jwt-username', data.username)
  window.localStorage.setItem('mvc-mvp-jwt-token', data.token)
  window.localStorage.setItem('mvc-mvp-jwt-id', data.id)
  window.localStorage.setItem('mvc-mvp-jwt-exp', data.exp)
}

export const wipeLocalStorageToken = () => {
  window.localStorage.removeItem('mvc-mvp-jwt-username')
  window.localStorage.removeItem('mvc-mvp-jwt-token')
  window.localStorage.removeItem('mvc-mvp-jwt-id')
  window.localStorage.removeItem('mvc-mvp-jwt-exp')
}
