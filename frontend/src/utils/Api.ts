import Axios, { AxiosInstance } from 'axios'

import { LoginData } from 'types/Auth'
import { User } from 'types/User'
import { getTokenFromLocalStorage } from 'utils/auth'

// TODO: try-catch Decorators
// https://fireship.io/lessons/ts-decorators-by-example/#:~:text=%20TypeScript%20Decorators%20by%20Example%20%201%20Class,a%20method%E2%80%99s%20function%2C%20change%20its%20control...%20More%20

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

  async post<T>(path: string, body: any) {
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
  async createUser(body: User) {
    return await this.post<User>(`users`, body)
  }
}
