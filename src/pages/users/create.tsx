import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import { Input, Select } from '@components/controls'
import Button from '@components/Button'
import type { NewUser } from '@typ/data'
import ActionsButtons from '@components/pages/ActionsButtons'
import { roleOptions, columnsWidth } from './common'

const { nameWidth, roleWidth, passwordWidth } = columnsWidth

export const TableHeaders = () => {
    return (
        <Row>
            <Cell type='header' width={nameWidth}>
                Nombre
            </Cell>
            <Cell type='header' width={roleWidth}>
                Role
            </Cell>
            <Cell type='header' width={passwordWidth}>
                Contraseña
            </Cell>
        </Row>
    )
}

const Create = () => {
    const navigateTo = useNavigate()

    const [{ name, role, password }, setState] = useState<NewUser>({
        name: '',
        role: '',
        password: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleRoleChange = (v: string) => {
        setState((s) => ({ ...s, role: v }))
    }

    return (
        <>
            <PageTitle>Crear usuario</PageTitle>

            <Table>
                <TableHeaders />

                <Row>
                    <Cell width={nameWidth} type='text'>
                        <Input
                            type='text'
                            placeholder='Nombre'
                            spellCheck='false'
                            value={name}
                            name='name'
                            onChange={handleInputChange}
                        />
                    </Cell>

                    <Cell width={roleWidth}>
                        <Select.Container
                            onChange={handleRoleChange}
                            value={role}
                            label='Selecciona un role'
                        >
                            {roleOptions}
                        </Select.Container>
                    </Cell>

                    <Cell width={passwordWidth} type='text'>
                        <Input
                            type='text'
                            placeholder='Contraseña'
                            spellCheck='false'
                            value={password}
                            name='password'
                            onChange={handleInputChange}
                        />
                    </Cell>
                </Row>
            </Table>

            <ActionsButtons>
                <Button type='success'>Crear</Button>
                <Button onClick={() => navigateTo('/users')} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Create
