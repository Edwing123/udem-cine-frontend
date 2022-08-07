import { endpoints, join } from './constants'
import type { Movie, NewMovie, UpdateMovie } from '@typ/data'
import { fetcher } from './fetcher'

export class MoviesAPI {
    static async get(id: number) {
        return fetcher<Movie>(join(endpoints.MOVIES_GET, id.toString()), 'GET')
    }

    static async list() {
        return fetcher<Movie[]>(endpoints.MOVIES_LIST, 'GET')
    }

    static async create(movie: NewMovie) {
        return fetcher<string>(endpoints.MOVIES_CREATE, 'POST', movie)
    }

    static async edit(id: number, movie: UpdateMovie) {
        return fetcher<string>(
            join(endpoints.MOVIES_EDIT, id.toString()),
            'PATCH',
            movie
        )
    }

    static async delete(id: number) {
        return fetcher<string>(
            join(endpoints.MOVIES_DELETE, id.toString()),
            'DELETE'
        )
    }
}
