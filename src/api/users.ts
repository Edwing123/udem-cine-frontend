import { endpoints } from './constants'
import { stringify, defaultHeaders } from './utils'
import { Credentials, User } from '@typ/data'

export default class UserAPI {
    static async login(credentials: Credentials) {
        const res = await fetch(endpoints.AUTH_LOGIN, {
            method: 'POST',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify(credentials)
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return true
    }

    static async logout() {
        const res = await fetch(endpoints.AUTH_LOGOUT, {
            method: 'POST',
            credentials: 'include'
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return res.status === 200
    }

    static async getUserDetails() {
        const res = await fetch(endpoints.USER_DETAILS, {
            credentials: 'include'
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as User
    }
}
