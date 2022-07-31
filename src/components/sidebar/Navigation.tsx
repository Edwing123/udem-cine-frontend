import { styled } from '@config/stitches.config'
import navigationItems from './navigationItems.json'
import { navigation as navigationIcons } from '@assets/icons'
import type { NavigationIconsKeys } from '@assets/icons'
import NavigationItem from './NavigationItem'

const Container = styled('nav', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
})

const Navigation = () => {
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
