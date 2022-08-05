import { SuccessMessage, GenericMessage, ErrorMessage } from '@typ/api'

export const isErrorMessage = (
    message: GenericMessage
): message is ErrorMessage => {
    return message != undefined && 'reason' in message
}

export const isSuccessMessage = (
    message: GenericMessage
): message is SuccessMessage => {
    return message != undefined && 'data' in message
}

export const stringify = <T>(body: T) => {
    return JSON.stringify(body)
}

export const parse = <T>(payload: string) => {
    return JSON.parse(payload) as T
}

export const defaultHeaders = () => {
    const headers = new Headers({})
    headers.append('content-type', 'application/json')
    return headers
}
