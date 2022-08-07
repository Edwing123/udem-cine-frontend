const BASE = 'https://udem-cine.com:4040'

export const join = (...segmenets: string[]) => segmenets.join('/')

// I don't think this name is correct :|
const createPathCurry =
    (...prefixes: string[]) =>
    (...segmenets: string[]) => {
        return `${BASE}/${join(...prefixes)}/${join(...segmenets)}`
    }

const [auth, users, movies, rooms, schedules, functions] = [
    'auth',
    'users',
    'movies',
    'rooms',
    'schedules',
    'functions'
].map((path) => createPathCurry(path))

export const endpoints = {
    AUTH_LOGIN: auth('login'),
    AUTH_LOGOUT: auth('logout'),
    IS_LOGGED_IN: `${BASE}/is-logged-in`,

    // User related.
    USERS_GET: users('get'),
    USERS_LIST: users('list'),
    USERS_CREATE: users('create'),
    USERS_EDIT: users('edit'),
    USERS_DELETE: users('delete'),

    // Movies related.
    MOVIES_GET: movies('get'),
    MOVIES_LIST: movies('list'),
    MOVIES_CREATE: movies('create'),
    MOVIES_EDIT: movies('edit'),
    MOVIES_DELETE: movies('delete'),

    // Rooms related.
    ROOMS_GET: rooms('get'),
    ROOMS_LIST: rooms('list'),
    ROOMS_CREATE: rooms('create'),
    ROOMS_EDIT: rooms('edit'),
    ROOMS_DELETE: rooms('delete'),

    // Schedules related.
    SCHEDULES_GET: schedules('get'),
    SCHEDULES_LIST: schedules('list'),
    SCHEDULES_CREATE: schedules('create'),
    SCHEDULES_EDIT: schedules('edit'),
    SCHEDULES_DELETE: schedules('delete'),

    // Schedules related.
    FUNCTIONS_GET: functions('get'),
    FUNCTIONS_LIST: functions('list'),
    FUNCTIONS_CREATE: functions('create'),
    FUNCTIONS_EDIT: functions('edit'),
    FUNCTIONS_DELETE: functions('delete')
}

export const codes = {
    AUTH_FAILED: 'auth_failed',
    NOT_LOGGED_IN: 'not_logged_in',
    ACCESS_DENIED: 'access_denied',
    ADMIN_ONLY: 'admin_only',
    SERVER_FAILED: 'database_server_error',
    INTERNAL: 'internal_server_error',
    CLIENT: 'client_error',
    NO_RECORDS: 'no_records',
    USER_NAME_EXISTS: 'username_exists',
    MOVIE_TITLE_EXISTS: 'movie_title_exists',
    ROOM_EXISTS: 'room_exists',
    SCHEDULE_EXISTS: 'schedule_exists',
    FUNCTION_ROOM_SCHEDULE_CONFLICT: 'function_room_schedule_conflict',
    FUNCTION_DEPENDS_ON_MOVIE: 'function_depends_on_movie',
    FUNCTION_DEPENDS_ON_ROOM: 'function_depends_on_room',
    FUNCTION_DEPENDS_ON_SCHEDULE: 'function_depends_on_schedule'
}
