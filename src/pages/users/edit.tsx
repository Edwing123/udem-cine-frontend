import { useNavigate, useParams } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { UpdateUser } from '@typ/data'
import { Input, Select } from '@components/controls'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, roleOptions, columnsWidth } from './common'

const { nameWidth, roleWidth } = columnsWidth

const Edit = () => {
    const { user_id } = useParams<{ user_id: string }>()
    const navigateTo = useNavigate()

    const [{ name, role }, setState] = useState<UpdateUser>({
        name: '',
        role: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleClasificationChange = (v: string) => {
        setState((s) => ({ ...s, classification: v }))
    }

    return (
        <>
            <PageTitle>Editar usuario (id={user_id!})</PageTitle>

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
                            onChange={handleClasificationChange}
                            value={role}
                            label='Selecciona un role'
                        >
                            {roleOptions}
                        </Select.Container>
                    </Cell>
                </Row>
            </Table>

            <ActionsButtons>
                <Button type='success'>Guardar</Button>
                <Button onClick={() => navigateTo('/users')} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
