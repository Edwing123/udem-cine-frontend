const BASE = 'http://localhost:4040'

export const endpoints = {
    AUTH_LOGIN: `${BASE}/auth/login`,
    AUTH_LOGOUT: `${BASE}/auth/logout`,
    IS_LOGGED_IN: `${BASE}/is-logged-in`,

    // User related.
    USERS_GET: `${BASE}/users/get`,
    USERS_LIST: `${BASE}/users/list`,
    USERS_CREATE: `${BASE}/users/create`,
    USERS_EDIT: `${BASE}/users/edit`,
    USERS_DELETE: `${BASE}/users/delete`,

    // Movies related.
    MOVIES_LIST: `${BASE}/movies/list`,
    MOVIES_GET: `${BASE}/movies/get`,
    MOVIES_CREATE: `${BASE}/movies/create`,
    MOVIES_EDIT: `${BASE}/movies/edit`,
    MOVIES_DELETE: `${BASE}/movies/delete`,

    // Rooms related.
    ROOMS_LIST: `${BASE}/rooms/list`,
    ROOMS_GET: `${BASE}/rooms/get`,
    ROOMS_CREATE: `${BASE}/rooms/create`,
    ROOMS_EDIT: `${BASE}/rooms/edit`,
    ROOMS_DELETE: `${BASE}/rooms/delete`,

    // Schedules related.
    SCHEDULES_LIST: `${BASE}/schedules/list`,
    SCHEDULES_GET: `${BASE}/schedules/get`,
    SCHEDULES_CREATE: `${BASE}/schedules/create`,
    SCHEDULES_EDIT: `${BASE}/schedules/edit`,
    SCHEDULES_DELETE: `${BASE}/schedules/delete`
}
