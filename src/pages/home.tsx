import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <aside></aside>
            <Outlet />
        </div>
    )
}

export default Home
