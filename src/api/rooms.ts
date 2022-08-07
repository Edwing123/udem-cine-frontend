import { endpoints, join } from './constants'
import type { Room, NewRoom, UpdateRoom } from '@typ/data'
import { fetcher } from './fetcher'

export class RoomsAPI {
    static async get(id: number) {
        return fetcher<Room>(join(endpoints.ROOMS_GET, id.toString()), 'GET')
    }

    static async list() {
        return fetcher<Room[]>(endpoints.ROOMS_LIST, 'GET')
    }

    static async create(room: NewRoom) {
        return fetcher<string>(endpoints.ROOMS_CREATE, 'POST', room)
    }

    static async edit(id: number, room: UpdateRoom) {
        return fetcher<string>(
            join(endpoints.ROOMS_EDIT, id.toString()),
            'PATCH',
            room
        )
    }

    static async delete(id: number) {
        return fetcher<string>(
            join(endpoints.ROOMS_DELETE, id.toString()),
            'DELETE'
        )
    }
}
