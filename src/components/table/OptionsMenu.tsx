import { interactions as interactionsIcons } from '@assets/icons'
import { styled } from '@config/stitches.config'
import { Root, Trigger, Portal, Content } from '@radix-ui/react-popover'
import { FC } from 'react'

const StyledTrigger = styled(Trigger, {
    position: 'absolute',
    right: '$20', // Has to be in sync with the padding of `Row.tsx`
    top: '50%',
    transform: 'translateY(-50%)',

    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 100ms linear',

    '&:is(:hover, :focus-visible)': {
        outline: 'none',
        transform: 'scale(1.1) translateY(-50%)'
    }
})

const MenuIcon = styled('img', {})

const StyledContent = styled(Content, {
    width: '130px',
    padding: '$8',

    backgroundColor: '$tableOptionsMenuBgColor',
    borderRadius: '$sm',
    boxShadow: '$tableOptionsMenu'
})

const ItemButton = styled('button', {
    display: 'flex',
    width: '100%',
    gap: '$12',
    alignItems: 'center',
    padding: '$8 $4',

    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',

    '&:is(:hover, :focus-visible)': {
        backgroundColor: '$tableOptionsOnHoverBgColor'
    }
})

const ItemICon = styled('img', {})

const ItemText = styled('span', {
    color: '$tableOptionsTextColor',
    fontSize: '$sm',
    fontWeight: '$normal'
})

const Separator = styled('span', {
    display: 'block',
    width: '100%',
    height: '2px',
    margin: '0 auto',

    backgroundColor: '$tableOptionsSeparatorBgColor'
})

type Props = {
    onEdit?: () => void
    onDelete?: () => void
    title: string
}

const OptionsMenu: FC<Props> = ({ title }) => {
    return (
        <Root>
            <StyledTrigger aria-label={title} title={title}>
                <MenuIcon
                    aria-hidden
                    src={interactionsIcons.contextMenu}
                ></MenuIcon>
            </StyledTrigger>
            <Portal>
                <StyledContent>
                    <ItemButton>
                        <ItemICon
                            width='21'
                            height='21'
                            aria-hidden
                            src={interactionsIcons.edit}
                        />
                        <ItemText>Editar</ItemText>
                    </ItemButton>
                    <Separator />
                    <ItemButton>
                        <ItemICon
                            width='21'
                            height='21'
                            aria-hidden
                            src={interactionsIcons.delete}
                        />
                        <ItemText>Eliminar</ItemText>
                    </ItemButton>
                </StyledContent>
            </Portal>
        </Root>
    )
}

export default OptionsMenu
