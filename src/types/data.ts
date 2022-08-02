export type Credentails = {
    username: string
    password: string
}

export type Movie = {
    id: number
    title: string
    classification: string
    genre: string
    duration: number
    releaseDate: string
}

export type NewMovie = Omit<Movie, 'id'>

export type UpdateMovie = Omit<Movie, 'id'>

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

export type UpdateUser = Omit<User, 'id'>

export type Room = {
    number: number
    seats: number
}

export type NewRoom = Room

export type UpdateRoom = Room

export type Schedule = {
    id: number
    name: string
    time: string
}

export type NewSchedule = Omit<Schedule, 'id'>

export type UpdateSchedule = Omit<Schedule, 'id'>

export type Function = {
    id: number
    movie: string
    schedule: string
    room: number
    price: number
    createdAt: string
}

export type NewFunction = {
    movieId: number
    scheduleId: number
    room: number
    price: number
}

export type UpdateFunction = NewFunction
