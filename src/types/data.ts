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
