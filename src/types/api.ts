export type ErrorMessage = { ok: false; code: string; details: any }

export type SuccessMessage<T> = { ok: true; data: T }

export type ResponseBody<OkBody> = SuccessMessage<OkBody> | ErrorMessage

export type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE'

export type Options = {
    method: Method
    body?: any
    headers: any
    credentials: RequestCredentials
}
