import { styled } from '@config/stitches.config'
import navigationItems from './navigationItems.json'
import { navigation as navigationIcons } from '@assets/icons'
import type { NavigationIconsKeys } from '@assets/icons'
import NavigationItem from './NavigationItem'
import { FC } from 'react'

const Container = styled('nav', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
})

type Props = {
    role: string
}

const Navigation: FC<Props> = ({ role }) => {
    if (role === 'taquillero') {
        const { id, icon, ...props } = navigationItems[5]

        return (
            <NavigationItem
                key={id}
                icon={navigationIcons[icon as NavigationIconsKeys]}
                {...props}
            />
        )
    }

    const items = navigationItems.map(({ id, icon, ...props }) => (
        <NavigationItem
            key={id}
            icon={navigationIcons[icon as NavigationIconsKeys]}
            {...props}
        />
    ))

    return <Container>{items}</Container>
}

export default Navigation
