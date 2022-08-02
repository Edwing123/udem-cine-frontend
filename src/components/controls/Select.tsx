import { FC, ReactNode } from 'react'
import {
    Root,
    Trigger,
    Value,
    Icon,
    Portal,
    Content,
    Viewport,
    Item,
    ItemText
} from '@radix-ui/react-select'
import { styled, css } from '@config/stitches.config'

const sharedStyles = css({
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$black2',
    cursor: 'pointer',
    borderRadius: '$sm'
})

const StyledTrigger = styled(Trigger, sharedStyles, {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0 $4',

    border: 'none',
    borderRadius: '$sm',
    backgroundColor: '$white4',

    '&:is(:hover, :focus-visible)': {
        backgroundColor: '$white3'
    },

    '&[data-placeholder]': { color: '$black2' }
})

const StyledContent = styled(Content, {
    padding: '$4',
    backgroundColor: '$white1',
    boxShadow: '$tableOptionsMenu',
    borderRadius: '$sm'
})

const StyledItem = styled(Item, sharedStyles, {
    display: 'block',
    padding: '$4',

    '&:is(:hover, :focus-visible)': {
        backgroundColor: '$white4',
        outline: 'none'
    },

    '&[data-state=checked]': {
        color: '$blue1'
    }
})

export { ItemText, StyledItem as Item }

type Props = {
    children: ReactNode[]
    value: string
    label: string
    onChange: (value: string) => void
}

const Container: FC<Props> = ({ value, onChange, children, label }) => {
    return (
        <Root onValueChange={onChange} value={value}>
            <StyledTrigger aria-label={label}>
                <Value />
                <Icon />
            </StyledTrigger>

            <Portal>
                <StyledContent>
                    <Viewport>{children}</Viewport>
                </StyledContent>
            </Portal>
        </Root>
    )
}

export { Container }
