import { endpoints, join } from './constants'
import type { Credentials, User, NewUser, UpdateUser } from '@typ/data'
import { fetcher } from './fetcher'

export class AuthAPI {
    static async login(credentials: Credentials) {
        return fetcher<{ id: number }>(
            endpoints.AUTH_LOGIN,
            'POST',
            credentials
        )
    }

    static async logout() {
        return fetcher(endpoints.AUTH_LOGOUT, 'POST')
    }

    static async isLoggedIn() {
        return fetcher<{ id: number }>(endpoints.IS_LOGGED_IN, 'GET')
    }
}

export class UsersAPI {
    static async get(id: number) {
        return fetcher<User>(join(endpoints.USERS_GET, id.toString()), 'GET')
    }

    static async list() {
        return fetcher<User[]>(endpoints.USERS_LIST, 'GET')
    }

    static async create(user: NewUser) {
        return fetcher<string>(endpoints.USERS_CREATE, 'POST', user)
    }

    static async edit(id: number, user: UpdateUser) {
        return fetcher<string>(
            join(endpoints.USERS_EDIT, id.toString()),
            'PATCH',
            user
        )
    }

    static async delete(id: number) {
        return fetcher<string>(
            join(endpoints.USERS_DELETE, id.toString()),
            'DELETE'
        )
    }
}
