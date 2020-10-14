import Axios, { AxiosInstance } from 'axios'
import { LoginData } from 'types/Auth'
import { User } from 'types/User'
import { getTokenFromLocalStorage } from './auth'

export class Api {
  baseURL: string
  axios: AxiosInstance

  constructor() {
    this.axios = Axios
    this.baseURL = `/api`
  }

  getHeaders() {
    return {
      headers: {
        Accept: 'application/json',
        Authorization: getTokenFromLocalStorage(),
      },
    }
  }

  async get<T>(path: string) {
    // try catch
    const { data } = await this.axios.get<T>(
      `${this.baseURL}/${path}`,
      this.getHeaders()
    )
    return data
  }

  async post<T>(path: string, body: Record<string, string | number>) {
    // try catch
    const { data } = await this.axios.post<T>(
      `${this.baseURL}/${path}`,
      body,
      this.getHeaders()
    )
    return data
  }

  async login(username: string, password: string) {
    return await this.post<LoginData>(`login`, {
      username,
      password,
    })
  }

  async getUser(id: string) {
    return await this.get<User>(`users/${id}`)
  }

  // decorate all these create functions with a try catch
  async createProject(body: any) {
    return await this.axios.post(`projects`, body)
  }

  async createOrganization(body: any) {
    return await this.axios.post(`oraganizations`, body)
  }
}
