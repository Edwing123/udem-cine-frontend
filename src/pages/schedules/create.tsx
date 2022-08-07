import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import { Input } from '@components/controls'
import Button from '@components/Button'
import type { NewSchedule } from '@typ/data'
import ActionsButtons from '@components/pages/ActionsButtons'
import { columnsWidth, TableHeaders } from './common'
import { codes, SchedulesAPI } from '@api'

const { nameWidth, timeWidth } = columnsWidth

const Create = () => {
    const navigateTo = useNavigate()
    const [isCreating, setIsCreating] = useState(false)

    const [{ name, time }, setState] = useState<NewSchedule>({
        name: '',
        time: ''
    })

    const goToSchedules = () => navigateTo('/schedules')

    const isButtonDisabled = name.length == 0 || time.length == 0 || isCreating

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        console.log(value)

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleOnSave = () => {
        setIsCreating(true)

        SchedulesAPI.create({
            name,
            time
        })
            .then((res) => {
                if (!res.ok) {
                    if (res.code === codes.SCHEDULE_EXISTS) {
                        alert('Este horario ya existe')
                        return
                    }
                }

                goToSchedules()
            })
            .finally(() => {
                setIsCreating(false)
            })
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
                            autoComplete='off'
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
                <Button
                    disabled={isButtonDisabled}
                    onClick={handleOnSave}
                    type='success'
                >
                    Crear
                </Button>
                <Button onClick={goToSchedules} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Create
