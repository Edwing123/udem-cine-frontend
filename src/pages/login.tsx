import Header from '@components/login/Header'
import Form from '@components/login/Form'
import Title from '@components/Title'
import { styled } from '@config/stitches.config'

const Container = styled('div', {
    minHeight: '100vh',
    backgroundColor: '$loginBgColor'
})

const StyledTitle = styled(Title, {
    margin: '6rem 0 3rem',

    color: '$loginBigTitleTextColor',
    textAlign: 'center'
})

const Login = () => {
    return (
        <Container>
            <Header />
            <StyledTitle size={2}>Inicio de sesion</StyledTitle>
            <Form />
        </Container>
    )
}

export default Login
