import { Routes, Route } from 'react-router-dom'
import Home from '@pages/home'
import Users from '@pages/users/index'
import Login from '@pages/login'
import { globalStyles } from '@config/stitches.config'

const App = () => {
    globalStyles()

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='users' element={<Users />} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default App
