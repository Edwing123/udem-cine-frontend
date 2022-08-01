import type { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { styled, css } from '@config/stitches.config'
import type { NavigationItem } from '@typ/page'

const Container = styled('span', {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '$16',
    padding: '$12 0 $12 $16',

    '&::before': {
        content: '',
        display: 'block',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '6px',
        visibility: 'hidden',
        backgroundColor: '$$borderColor'
    }
})

const Text = styled('span', {
    fontSize: '$sm',
    color: '$sidebarNavigationItemTextColor',
    fontWeight: '$semibold'
})

const Icon = styled('img', {
    width: '26px'
})

const LinkStyles = css({
    width: '100%',

    [`&.active ${Container}::before`]: {
        visibility: 'visible'
    },

    [`&.active ${Container}`]: {
        backgroundColor: '$$activeBgColor'
    },

    '&:is(:hover, :focus)': {
        outline: 'none',
        backgroundColor: '$sidebarNavigationItemOnHoverBgColor'
    }
})()

type Props = Omit<NavigationItem, 'id'>

const Link: FC<Props> = ({ path, text, icon, borderColor, activeBgColor }) => {
    return (
        <NavLink to={path} className={LinkStyles}>
            <Container
                css={{
                    $$borderColor: borderColor,
                    $$activeBgColor: activeBgColor
                }}
            >
                <Icon src={icon} alt='' aria-hidden width='26' height='26' />
                <Text>{text}</Text>
            </Container>
        </NavLink>
    )
}

export default Link
