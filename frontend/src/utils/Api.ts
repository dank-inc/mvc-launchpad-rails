import Axios, { AxiosInstance } from 'axios'
import { LoginData } from 'types/Auth'
import { User } from 'types/User'
import { getHeaders } from './auth'

export class Api {
  token: string
  baseURL: string
  axios: AxiosInstance

  constructor() {
    this.axios = Axios
    this.baseURL = `/api`
    // handle settings etc

    this.token = 'asdfasdfa' // get from localstorage after auth
  }

  async get<T>(path: string) {
    // try catch
    const { data } = await this.axios.get<T>(
      `${this.baseURL}/${path}`,
      getHeaders()
    )
    return data
  }

  async post<T>(path: string, body: Record<string, string | number>) {
    // try catch
    const { data } = await this.axios.post<T>(
      `${this.baseURL}/${path}`,
      body,
      getHeaders()
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
  async createProject(id: string, body: any) {
    const { data } = await this.axios.post(`projects/${id}`, body)
  }

  async createOrganization(id: string, body: any) {
    const { data } = await this.axios.post(`projects/${id}`, body)
  }
}
