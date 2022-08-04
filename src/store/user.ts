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
    const userId = await AuthAPI.login(credentials)

    isLoggedInStore.set(true)
    await getUserDetails(userId)
}

export async function logout() {
    await AuthAPI.logout()
    isLoggedInStore.set(false)
}

export async function getUserDetails(id: number) {
    const user = await UsersAPI.get(id)
    userStore.set(user)
}
