import { useNavigate, useParams } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { UpdateSchedule } from '@typ/data'
import { Input } from '@components/controls'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, columnsWidth } from './common'

const { nameWidth, timeWidth } = columnsWidth

const Edit = () => {
    const { schedule_id } = useParams<{ schedule_id: string }>()
    const navigateTo = useNavigate()

    const [{ name, time }, setState] = useState<UpdateSchedule>({
        name: '',
        time: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    return (
        <>
            <PageTitle>Editar horario (id={schedule_id!})</PageTitle>

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

                    <Cell width={timeWidth} type='text'>
                        <Input
                            type='time'
                            min='0'
                            placeholder='Hora'
                            spellCheck='false'
                            value={time}
                            name='time'
                            onChange={handleInputChange}
                        />
                    </Cell>
                </Row>
            </Table>

            <ActionsButtons>
                <Button type='success'>Guardar</Button>
                <Button onClick={() => navigateTo('/schedules')} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
