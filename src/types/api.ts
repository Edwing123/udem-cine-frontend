type OK = { ok: boolean }

export type ErrorMessage = OK & { reason: string }

export type SuccessMessage = OK & { data: string }

export type GenericMessage = SuccessMessage | ErrorMessage
