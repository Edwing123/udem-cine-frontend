import { styled } from '@config/stitches.config'
import Header from './Header'
import Navigation from './Navigation'
import Button from '@components/Button'

const ButtonContainer = styled('div', {
    width: '100%',
    marginTop: 'auto',
    padding: '0 0 $28',

    textAlign: 'center'
})

const LogoutButton = styled(Button, {
    color: '$sidebarLogoutButtonTextColor',
    backgroundColor: '$sidebarLogoutButtonBgColor',
    fontSize: '$sm'
})

const StyledSidebar = styled('aside', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: '$sidebarBgColor'
})

const Sidebar = () => {
    return (
        <StyledSidebar>
            <Header />

            <Navigation />

            <ButtonContainer>
                <LogoutButton>Cerrar sesion</LogoutButton>
            </ButtonContainer>
        </StyledSidebar>
    )
}

export default Sidebar
