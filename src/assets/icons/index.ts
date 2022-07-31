import movies from './navigation/movies.svg'
import users from './navigation/users.svg'
import rooms from './navigation/rooms.svg'
import schedules from './navigation/schedules.svg'
import functions from './navigation/functions.svg'
import tickets from './navigation/tickets.svg'

import key from './forms/key.svg'
import user from './forms/user.svg'

export const navigation = {
    movies,
    users,
    rooms,
    schedules,
    functions,
    tickets
}

export type NavigationIconsKeys = keyof typeof navigation

export const forms = {
    key,
    user
}

export type FormsIconsKeys = keyof typeof forms
