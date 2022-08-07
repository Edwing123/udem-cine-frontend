import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import { globalStyles } from '@config/stitches.config'
import { getUserDetails, isLoggedInStore, userStore } from '@store/user'
import { AuthAPI } from '@api'
import { useStore } from '@nanostores/react'
import PageTitle from '@components/PageTitle'

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

const FunctionsCatalog = lazy(() => import('@pages/catalog/index'))

const Login = lazy(() => import('@pages/login'))

const AdminOnly = ({ isAdmin }: { isAdmin: boolean }) => {
    if (isAdmin) {
        return (
            <>
                <Outlet />
            </>
        )
    }

    return (
        <>
            <PageTitle>Pagina protegida!</PageTitle>
        </>
    )
}

const App = () => {
    globalStyles()
    const goTo = useNavigate()
    const { role } = useStore(userStore)

    useEffect(() => {
        AuthAPI.isLoggedIn().then((res) => {
            if (!res.ok) {
                goTo('/login')
                return
            }

            isLoggedInStore.set(true)
            getUserDetails(res.data.id).then(() => {
                goTo('/')
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

                    {/* Catalog of movies */}
                    <Route path='catalog' element={<FunctionsCatalog />} />
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
