import { atom } from 'nanostores'
import { User, Credentials } from '@typ/data'
import { UserAPI } from '@api'

export const userStore = atom<User>({
    id: 0,
    name: '',
    role: ''
})

export const isLoggedInStore = atom(false)

export async function login(credentials: Credentials) {
    await UserAPI.login(credentials)

    isLoggedInStore.set(true)
    await getUserDetails()
}

export async function logout() {
    await UserAPI.logout()
    isLoggedInStore.set(false)
}

export async function getUserDetails() {
    const user = await UserAPI.getUserDetails()
    userStore.set(user)
}
