import { Outlet } from 'react-router-dom'
import Sidebar from '@components/sidebar/Sidebar'
import { styled } from '@config/stitches.config'

const Container = styled('div', {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '250px 1fr',

    backgroundColor: '$homeBgColor'
})

const StyledMain = styled('main', {
    padding: '$40'
})

const Home = () => {
    return (
        <Container>
            <Sidebar />
            <StyledMain>
                <Outlet />
            </StyledMain>
        </Container>
    )
}

export default Home
