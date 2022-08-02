import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import { Input } from '@components/controls'
import Button from '@components/Button'
import type { NewSchedule } from '@typ/data'
import ActionsButtons from '@components/pages/ActionsButtons'
import { columnsWidth, TableHeaders } from './common'

const { nameWidth, timeWidth } = columnsWidth

const Create = () => {
    const navigateTo = useNavigate()

    const [{ name, time }, setState] = useState<NewSchedule>({
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
            <PageTitle>Crear horario</PageTitle>

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
                <Button type='success'>Crear</Button>
                <Button onClick={() => navigateTo('/schedules')} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Create
