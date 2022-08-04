import type { ReactNode } from 'react'
import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import { globalStyles } from '@config/stitches.config'
import { getUserDetails, isLoggedInStore, userStore } from '@store/user'
import { AuthAPI } from '@api'
import { useStore } from '@nanostores/react'

const Home = lazy(() => import('@pages/home'))

const Movies = lazy(() => import('@pages/movies/index'))
const MoviesCreate = lazy(() => import('@pages/movies/create'))
const MoviesEdit = lazy(() => import('@pages/movies/edit'))

const Users = lazy(() => import('@pages/users/index'))
const UsersCreate = lazy(() => import('@pages/users/create'))
const UsersEdit = lazy(() => import('@pages/users/edit'))

const Rooms = lazy(() => import('@pages/rooms/index'))
const RoomsCreate = lazy(() => import('@pages/rooms/create'))
const RoomsEdit = lazy(() => import('@pages/rooms/edit'))

const Schedules = lazy(() => import('@pages/schedules/index'))
const SchedulesCreate = lazy(() => import('@pages/schedules/create'))
const SchedulesEdit = lazy(() => import('@pages/schedules/edit'))

const Functions = lazy(() => import('@pages/functions/index'))
const FunctionsCreate = lazy(() => import('@pages/functions/create'))
const FunctionsEdit = lazy(() => import('@pages/functions/edit'))

const Login = lazy(() => import('@pages/login'))

const AdminOnly = ({ isAdmin }: { isAdmin: boolean }) => {
    const goTo = useNavigate()

    useEffect(() => {
        !isAdmin && goTo('/tickets')
        console.log('ok')
    })

    if (isAdmin) {
        return (
            <>
                <Outlet />
            </>
        )
    }

    return (
        <>
            <h1>Protected page</h1>
        </>
    )
}

const App = () => {
    const { role } = useStore(userStore)

    globalStyles()
    const goTo = useNavigate()

    useEffect(() => {
        AuthAPI.isLoggedIn().then(({ id, ok }) => {
            if (!ok) {
                goTo('/login')
                return
            }

            isLoggedInStore.set(true)
            getUserDetails(id).then(() => {
                if (role === 'admin') {
                    goTo('/users')
                } else {
                    goTo('/tickets')
                }
            })
        })
    }, [])

    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Suspense>
                            <Home />
                        </Suspense>
                    }
                >
                    <Route element={<AdminOnly isAdmin={role === 'admin'} />}>
                        {/* Movies */}
                        <Route path='movies' element={<Movies />} />
                        <Route
                            path='movies/create'
                            element={<MoviesCreate />}
                        />
                        <Route
                            path='movies/edit/:movie_id'
                            element={<MoviesEdit />}
                        />

                        {/* Users */}
                        <Route path='users' element={<Users />} />
                        <Route path='users/create' element={<UsersCreate />} />
                        <Route
                            path='users/edit/:user_id'
                            element={<UsersEdit />}
                        />

                        {/* Rooms */}
                        <Route path='rooms' element={<Rooms />} />
                        <Route path='rooms/create' element={<RoomsCreate />} />
                        <Route
                            path='rooms/edit/:room_id'
                            element={<RoomsEdit />}
                        />

                        {/* Schedules */}
                        <Route path='schedules' element={<Schedules />} />
                        <Route
                            path='schedules/create'
                            element={<SchedulesCreate />}
                        />
                        <Route
                            path='schedules/edit/:schedule_id'
                            element={<SchedulesEdit />}
                        />

                        {/* Functions */}
                        <Route path='functions' element={<Functions />} />
                        <Route
                            path='functions/create'
                            element={<FunctionsCreate />}
                        />
                        <Route
                            path='functions/edit/:function_id'
                            element={<FunctionsEdit />}
                        />
                    </Route>

                    {/* Tickets */}
                    <Route path='tickets' element={<h1>Tickets</h1>} />
                </Route>

                {/* Login */}
                <Route
                    path='/login'
                    element={
                        <Suspense>
                            <Login />
                        </Suspense>
                    }
                />
            </Routes>
        </>
    )
}

export default App
