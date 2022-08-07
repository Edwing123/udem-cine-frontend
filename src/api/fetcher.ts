import { ResponseBody, Options, Method } from '@typ/api'
import { defaultHeaders, stringify } from '@utils/api'

export const fetcher = async <OkBody>(
    url: string,
    method: Method,
    body: any = undefined
) => {
    const options: Options = {
        method: method,
        headers: defaultHeaders(),
        credentials: 'include'
    }

    if (body != undefined) {
        options.body = stringify(body)
    }

    try {
        const response = fetch(url, options)
        const body = (await (await response).json()) as ResponseBody<OkBody>
        return body
    } catch (e: any) {
        throw new Error(e)
    }
}
