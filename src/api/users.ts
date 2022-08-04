import { endpoints } from './constants'
import type { GenericResponse } from './utils'
import { stringify, defaultHeaders } from './utils'
import type { Credentials, User, NewUser, UpdateUser } from '@typ/data'

export class AuthAPI {
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

        return (await res.json()).data as number
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

    static async isLoggedIn() {
        const res = await fetch(endpoints.IS_LOGGED_IN, {
            credentials: 'include'
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as { id: number; ok: boolean }
    }
}

export class UsersAPI {
    static async get(id: number) {
        const res = await fetch(endpoints.USER_GET + `/${id}`, {
            credentials: 'include'
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as User
    }

    static async list() {
        const res = await fetch(endpoints.USERS_LIST, {
            method: 'GET',
            credentials: 'include'
        })

        if (res.status != 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as User[]
    }

    static async create(user: NewUser) {
        const res = await fetch(endpoints.USERS_CREATE, {
            method: 'POST',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify(user)
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericResponse
    }

    static async edit(id: number, user: UpdateUser) {
        const res = await fetch(endpoints.USERS_EDIT, {
            method: 'PATCH',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify({ id, data: user })
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericResponse
    }

    static async delete(id: number) {
        const res = await fetch(endpoints.USERS_DELETE, {
            method: 'DELETE',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify({ id })
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return await res.json()
    }
}
