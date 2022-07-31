import type { FC } from 'react'
import Title from '@components/Title'
import { styled } from '@config/stitches.config'

const StyledTitle = styled(Title, {
    color: '$pageTitleTextColor',
    margin: '0 0 $40'
})

const PageTitle: FC<{ children: string | string[] }> = ({ children }) => {
    return <StyledTitle size={1}>{children}</StyledTitle>
}

export default PageTitle
