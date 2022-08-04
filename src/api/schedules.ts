import { endpoints } from './constants'
import { stringify, defaultHeaders } from './utils'
import type { GenericResponse } from './utils'
import type { Schedule, NewSchedule, UpdateSchedule } from '@typ/data'

export class SchedulesAPI {
    static async get(id: number) {
        const res = await fetch(endpoints.SCHEDULES_GET + `/${id}`, {
            credentials: 'include'
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as Schedule
    }

    static async list() {
        const res = await fetch(endpoints.SCHEDULES_LIST, {
            method: 'GET',
            credentials: 'include'
        })

        if (res.status != 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as Schedule[]
    }

    static async create(schedule: NewSchedule) {
        const res = await fetch(endpoints.SCHEDULES_CREATE, {
            method: 'POST',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify(schedule)
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericResponse
    }

    static async edit(id: number, schedule: UpdateSchedule) {
        const res = await fetch(endpoints.SCHEDULES_EDIT, {
            method: 'PATCH',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify({ id, data: schedule })
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericResponse
    }

    static async delete(id: number) {
        const res = await fetch(endpoints.SCHEDULES_DELETE, {
            method: 'DELETE',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify({ id })
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return await res.json()
    }
}
