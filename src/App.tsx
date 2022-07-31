import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { globalStyles } from '@config/stitches.config'

const Home = lazy(() => import('@pages/home'))
const Movies = lazy(() => import('@pages/movies/index'))
const MoviesCreate = lazy(() => import('@pages/movies/create'))
const Rooms = lazy(() => import('@pages/rooms/index'))
const Schedules = lazy(() => import('@pages/schedules/index'))
const Functions = lazy(() => import('@pages/functions/index'))
const Users = lazy(() => import('@pages/users/index'))
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

                    {/* Users */}
                    <Route
                        path='users'
                        element={
                            <Suspense>
                                <Users />
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
