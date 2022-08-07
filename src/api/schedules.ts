import { endpoints, join } from './constants'
import type { Schedule, NewSchedule, UpdateSchedule } from '@typ/data'
import { fetcher } from './fetcher'

export class SchedulesAPI {
    static async get(id: number) {
        return fetcher<Schedule>(
            join(endpoints.SCHEDULES_GET, id.toString()),
            'GET'
        )
    }

    static async list() {
        return fetcher<Schedule[]>(endpoints.SCHEDULES_LIST, 'GET')
    }

    static async create(schedule: NewSchedule) {
        return fetcher<string>(endpoints.SCHEDULES_CREATE, 'POST', schedule)
    }

    static async edit(id: number, schedule: UpdateSchedule) {
        return fetcher<string>(
            join(endpoints.SCHEDULES_EDIT, id.toString()),
            'PATCH',
            schedule
        )
    }

    static async delete(id: number) {
        return fetcher<string>(
            join(endpoints.SCHEDULES_DELETE, id.toString()),
            'DELETE'
        )
    }
}
