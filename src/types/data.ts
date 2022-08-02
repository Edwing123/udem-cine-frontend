export type Credentails = {
    username: string
    password: string
}

export type Movie = {
    id: number
    title: string
    classification: string
    genre: string
    duration: string
    releaseDate: string
}

export type NewMovie = {
    title: string
    classification: string
    genre: string
    duration: number
    releaseDate: string
}

export type UpdateMovie = NewMovie

export type User = {
    id: number
    name: string
    role: string
}

export type NewUser = {
    name: string
    role: string
    password: string
}

export type UpdateUser = {
    name: string
    role: string
}

export type Room = {
    number: string
    seats: string
}

export type NewRoom = Room

export type UpdateRoom = Room
