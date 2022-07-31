import { styled } from '@config/stitches.config'
import { FC, ReactElement } from 'react'

export const StyledCell = styled('div', {
    fontSize: '$sm',

    variants: {
        type: {
            header: {
                color: '$tableHeaderTextColor',
                fontWeight: '$bold'
            },

            text: {
                color: '$tableDataTextColor',
                fontWeight: '$semibold'
            }
        }
    }
})

type Props = {
    children: ReactElement | string
    width?: string
    type?: 'text' | 'header'
}

const Cell: FC<Props> = ({ children, width, type }) => {
    return (
        <StyledCell type={type} css={{ width }}>
            {children}
        </StyledCell>
    )
}

export default Cell
