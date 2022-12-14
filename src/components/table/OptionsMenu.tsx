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
    borderRadius: '$sm',
    backgroundColor: 'transparent',
    cursor: 'pointer',

    '&:is(:hover, :focus-visible)': {
        outline: '2px solid $colors$blue1',
        outlineOffset: '3px'
    }
})

const ButtonIcon = styled('img', {})

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

const OptionsMenu: FC<Props> = ({ title, onEdit, onDelete }) => {
    return (
        <Root>
            <StyledTrigger aria-label={title} title={title}>
                <ButtonIcon
                    aria-hidden
                    src={interactionsIcons.contextMenu}
                    width='36'
                    height='6.50'
                ></ButtonIcon>
            </StyledTrigger>
            <Portal>
                <StyledContent>
                    <ItemButton onClick={onEdit}>
                        <ItemICon
                            width='21'
                            height='21'
                            aria-hidden
                            src={interactionsIcons.edit}
                        />
                        <ItemText>Editar</ItemText>
                    </ItemButton>
                    <Separator />
                    <ItemButton onClick={onDelete}>
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
