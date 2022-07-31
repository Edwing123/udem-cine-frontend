import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { globalStyles } from '@config/stitches.config'

const Home = lazy(() => import('@pages/home'))
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
                    <Route
                        path='users'
                        element={
                            <Suspense>
                                <Users />
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
