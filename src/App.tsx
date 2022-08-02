import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { globalStyles } from '@config/stitches.config'

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
const Functions = lazy(() => import('@pages/functions/index'))
const Login = lazy(() => import('@pages/login'))

const App = () => {
    globalStyles()

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
                    {/* Movies */}
                    <Route
                        path='movies'
                        element={
                            <Suspense>
                                <Movies />
                            </Suspense>
                        }
                    />
                    <Route
                        path='movies/create'
                        element={
                            <Suspense>
                                <MoviesCreate />
                            </Suspense>
                        }
                    />
                    <Route
                        path='movies/edit/:movie_id'
                        element={
                            <Suspense>
                                <MoviesEdit />
                            </Suspense>
                        }
                    />

                    {/* Users */}
                    <Route
                        path='users'
                        element={
                            <Suspense>
                                <Users />
                            </Suspense>
                        }
                    />
                    <Route
                        path='users/create'
                        element={
                            <Suspense>
                                <UsersCreate />
                            </Suspense>
                        }
                    />
                    <Route
                        path='users/edit/:user_id'
                        element={
                            <Suspense>
                                <UsersEdit />
                            </Suspense>
                        }
                    />

                    {/* Rooms */}
                    <Route
                        path='rooms'
                        element={
                            <Suspense>
                                <Rooms />
                            </Suspense>
                        }
                    />
                    <Route
                        path='rooms/create'
                        element={
                            <Suspense>
                                <RoomsCreate />
                            </Suspense>
                        }
                    />
                    <Route
                        path='rooms/edit/:room_id'
                        element={
                            <Suspense>
                                <RoomsEdit />
                            </Suspense>
                        }
                    />

                    {/* Schedules */}
                    <Route
                        path='schedules'
                        element={
                            <Suspense>
                                <Schedules />
                            </Suspense>
                        }
                    />

                    {/* Functions */}
                    <Route
                        path='functions'
                        element={
                            <Suspense>
                                <Functions />
                            </Suspense>
                        }
                    />
                </Route>
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
