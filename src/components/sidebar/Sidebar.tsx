import { styled } from '@config/stitches.config'
import Header from './Header'
import Navigation from './Navigation'
import Button from '@components/Button'
import { logout } from '@store/user'
import { useNavigate } from 'react-router-dom'
import { userStore } from '@store/user'
import { useStore } from '@nanostores/react'

const ButtonContainer = styled('div', {
    width: '100%',
    marginTop: 'auto',
    padding: '0 0 $28',

    textAlign: 'center'
})

const StyledSidebar = styled('aside', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: '$sidebarBgColor'
})

const Sidebar = () => {
    const goTo = useNavigate()
    const { name, role } = useStore(userStore)

    const handleOnLogout = () => {
        logout().then(() => {
            goTo('/login')
        })
    }

    return (
        <StyledSidebar>
            <Header userName={name} />

            <Navigation role={role} />

            <ButtonContainer>
                <Button onClick={handleOnLogout} type='danger'>
                    Cerrar sesion
                </Button>
            </ButtonContainer>
        </StyledSidebar>
    )
}

export default Sidebar
