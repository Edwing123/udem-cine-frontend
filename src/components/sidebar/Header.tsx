import Title from '@components/Title'
import { styled } from '@config/stitches.config'
import profilePicuture from '@assets/images/profile-picture.svg'
import type { FC } from 'react'

const StyledHeader = styled('header', {
    width: '100%',
    padding: '$28 0 0',
    marginBottom: '$16',

    textAlign: 'center',
    userSelect: 'none'
})

const StyledTitle = styled(Title, {
    marginBottom: '$16',

    color: '$sidebarTitleTextColor'
})

const ProfilePicture = styled('img', {
    display: 'inline-block',
    marginBottom: '$4'
})

const Username = styled('p', {
    marginBottom: '$16',

    fontSize: '$sm',
    color: '$sidebarUsernameTextColor',
    fontWeight: '$bold'
})

const Separator = styled('span', {
    display: 'block',
    width: '60%',
    height: '1px',
    margin: '0 auto',

    backgroundColor: '$sidebarSeparatorBgColor'
})

type Props = {
    userName: string
}

const Header: FC<Props> = ({ userName }) => {
    return (
        <StyledHeader>
            <StyledTitle size={1}>UdeMCine</StyledTitle>

            <ProfilePicture
                aria-label='Foto de perfil de usuario'
                alt=''
                width='80'
                height='80'
                src={profilePicuture}
            />

            <Username>{userName}</Username>

            <Separator />
        </StyledHeader>
    )
}

export default Header
