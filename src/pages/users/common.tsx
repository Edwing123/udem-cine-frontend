import { Select } from '@components/controls'
import { Cell, Row } from '@components/table'
import { roles } from './data.json'

const { nameWidth, roleWidth, passwordWidth } = {
    nameWidth: '20%',
    roleWidth: '20%',
    passwordWidth: '20%'
}

export const columnsWidth = {
    nameWidth,
    roleWidth,
    passwordWidth
}

export const TableHeaders = () => {
    return (
        <Row>
            <Cell type='header' width={nameWidth}>
                Nombre
            </Cell>
            <Cell type='header' width={roleWidth}>
                Role
            </Cell>
        </Row>
    )
}

export const roleOptions = roles.map((role) => {
    return (
        <Select.Item value={role} key={role}>
            <Select.ItemText>{role}</Select.ItemText>
        </Select.Item>
    )
})
