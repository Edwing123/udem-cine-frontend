import { styled } from '@config/stitches.config'
import { interactions as interactionsIcons } from '@assets/icons'
import { FC } from 'react'

const StyledAdd = styled('button', {
    height: '51px',
    aspectRatio: '1/1',

    borderRadius: '$xsm',
    border: 'none',
    backgroundColor: '$addButtonBgColor',
    transition: 'all 100ms linear',
    cursor: 'pointer',

    '&:is(:hover, :focus-visible)': {
        outline: 'none',
        transform: 'scale(1.1)'
    }
})

const StyledIcon = styled('img', {})

type Props = {
    onClick?: () => void
    title: string
}

const Add: FC<Props> = ({ onClick, title }) => {
    return (
        <StyledAdd onClick={onClick} title={title} aria-label={title}>
            <StyledIcon
                width='21'
                height='21'
                aria-hidden
                src={interactionsIcons.add}
            />
        </StyledAdd>
    )
}

export default Add
