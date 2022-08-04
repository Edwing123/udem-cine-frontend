import { endpoints } from './constants'
import { stringify, defaultHeaders } from './utils'
import type { GenericResponse } from './utils'
import type {
    Function,
    NewFunction,
    UpdateFunction,
    FunctionDetails
} from '@typ/data'

export class FunctionsAPI {
    static async get(id: number) {
        const res = await fetch(endpoints.FUNCTIONS_GET + `/${id}`, {
            credentials: 'include'
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as Function
    }

    static async list() {
        const res = await fetch(endpoints.FUNCTIONS_LIST, {
            method: 'GET',
            credentials: 'include'
        })

        if (res.status != 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()).data as FunctionDetails[]
    }

    static async create(func: NewFunction) {
        const res = await fetch(endpoints.FUNCTIONS_CREATE, {
            method: 'POST',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify(func)
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericResponse
    }

    static async edit(id: number, func: UpdateFunction) {
        const res = await fetch(endpoints.FUNCTIONS_EDIT, {
            method: 'PATCH',
            headers: defaultHeaders(),
            credentials: 'include',
            body: stringify({ id, data: func })
        })

        if (res.status !== 200) {
            throw new Error(res.status.toString())
        }

        return (await res.json()) as GenericResponse
    }

    static async delete(id: number) {
        const res = await fetch(endpoints.FUNCTIONS_DELETE, {
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
