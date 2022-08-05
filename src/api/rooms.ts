import { endpoints } from './constants'
import { stringify, defaultHeaders } from '@utils/api'
import { GenericMessage } from '@typ/api'
import type { Room, NewRoom, UpdateRoom } from '@typ/data'

export class RoomsAPI {
    static async get(number: number) {
        const res = await fetch(endpoints.ROOMS_GET + `/${number}`, {
            credentials: 'include'
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as Room
    }

    static async list() {
        const res = await fetch(endpoints.ROOMS_LIST, {
            method: 'GET',
            credentials: 'include'
        })

        if (res.status != 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as Room[]
    }

    static async create(room: NewRoom) {
        const res = await fetch(endpoints.ROOMS_CREATE, {
            method: 'POST',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify(room)
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericMessage
    }

    static async edit(id: number, room: UpdateRoom) {
        const res = await fetch(endpoints.ROOMS_EDIT, {
            method: 'PATCH',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify({ id, data: room })
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericMessage
    }

    static async delete(id: number) {
        const res = await fetch(endpoints.ROOMS_DELETE, {
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
