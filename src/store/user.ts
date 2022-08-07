import { atom } from 'nanostores'
import { User, Credentials } from '@typ/data'
import { UsersAPI, AuthAPI } from '@api'

export const userStore = atom<User>({
    id: 0,
    name: '',
    role: ''
})

export const isLoggedInStore = atom(false)

export async function login(credentials: Credentials) {
    const res = await AuthAPI.login(credentials)

    if (res.ok) {
        isLoggedInStore.set(true)
    }

    return res
}

export async function logout() {
    await AuthAPI.logout()
    isLoggedInStore.set(false)
}

export async function getUserDetails(id: number) {
    const res = await UsersAPI.get(id)

    if (res.ok) {
        userStore.set(res.data)
    }
}
