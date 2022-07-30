import { styled } from '@config/stitches.config'
import Title from '@components/Title'

const StyledHeader = styled('header', {
    padding: '$12 $36',
    backgroundColor: '$loginHeaderBgColor'
})

const StyledTitle = styled(Title, {
    color: '$loginLogoTextColor'
})

const Header = () => {
    return (
        <StyledHeader>
            <StyledTitle size={1}>UdeMCine</StyledTitle>
        </StyledHeader>
    )
}

export default Header
