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
