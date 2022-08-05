import { endpoints } from './constants'
import { stringify, defaultHeaders } from '@utils/api'
import { GenericMessage } from '@typ/api'
import type { Movie, NewMovie, UpdateMovie } from '@typ/data'

export class MoviesAPI {
    static async get(id: number) {
        const res = await fetch(endpoints.MOVIES_GET + `/${id}`, {
            credentials: 'include'
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as Movie
    }

    static async list() {
        const res = await fetch(endpoints.MOVIES_LIST, {
            method: 'GET',
            credentials: 'include'
        })

        if (res.status != 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as Movie[]
    }

    static async create(movie: NewMovie) {
        const res = await fetch(endpoints.MOVIES_CREATE, {
            method: 'POST',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify(movie)
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericMessage
    }

    static async edit(id: number, movie: UpdateMovie) {
        const res = await fetch(endpoints.MOVIES_EDIT, {
            method: 'PATCH',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify({ id, data: movie })
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericMessage
    }

    static async delete(id: number) {
        const res = await fetch(endpoints.MOVIES_DELETE, {
            method: 'DELETE',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify({ id })
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericMessage
    }
}
