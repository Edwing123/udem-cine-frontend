import { endpoints, join } from './constants'
import type {
    Function,
    NewFunction,
    UpdateFunction,
    FunctionDetails
} from '@typ/data'
import { fetcher } from './fetcher'

export class FunctionsAPI {
    static async get(id: number) {
        return fetcher<Function>(
            join(endpoints.FUNCTIONS_GET, id.toString()),
            'GET'
        )
    }

    static async list() {
        return fetcher<FunctionDetails[]>(endpoints.FUNCTIONS_LIST, 'GET')
    }

    static async create(func: NewFunction) {
        return fetcher<string>(endpoints.FUNCTIONS_CREATE, 'POST', func)
    }

    static async edit(id: number, func: UpdateFunction) {
        return fetcher<string>(
            join(endpoints.FUNCTIONS_EDIT, id.toString()),
            'PATCH',
            func
        )
    }

    static async delete(id: number) {
        return fetcher<string>(
            join(endpoints.FUNCTIONS_DELETE, id.toString()),
            'DELETE'
        )
    }
}
