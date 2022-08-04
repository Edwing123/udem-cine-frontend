import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import { Input, Select } from '@components/controls'
import Button from '@components/Button'
import type { NewUser } from '@typ/data'
import ActionsButtons from '@components/pages/ActionsButtons'
import { roleOptions, columnsWidth } from './common'
import { UsersAPI } from '@api'

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

    const goToUsers = () => {
        navigateTo('/users')
    }

    const [isCreating, setIsCreating] = useState(false)

    const [{ name, role, password }, setState] = useState<NewUser>({
        name: '',
        role: '',
        password: ''
    })

    const isButtonDisabled =
        (name.length == 0 && password.length == 0 && role.length == 0) ||
        isCreating

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleRoleChange = (v: string) => {
        setState((s) => ({ ...s, role: v }))
    }

    const handleOnCreate = () => {
        setIsCreating(true)
        UsersAPI.create({ name, role, password })
            .then(({ ok, ...props }) => {
                if (!ok && 'reason' in props) {
                    alert(props.reason)
                    return
                }

                goToUsers()
            })
            .finally(() => {
                setIsCreating(false)
            })
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
                            autoComplete='off'
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
                            type='password'
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
                <Button
                    type='success'
                    onClick={handleOnCreate}
                    disabled={isButtonDisabled}
                >
                    Crear
                </Button>
                <Button onClick={goToUsers} disabled={isCreating} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Create
