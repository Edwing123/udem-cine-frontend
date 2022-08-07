import { useNavigate, useParams } from 'react-router-dom'
import { ChangeEvent, useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { Schedule, UpdateSchedule } from '@typ/data'
import { Input } from '@components/controls'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, columnsWidth } from './common'
import { codes, SchedulesAPI } from '@api'
import * as pageUtils from '@utils/pages'

const { nameWidth, timeWidth } = columnsWidth

const Edit = () => {
    const { schedule_id } = useParams<{ schedule_id: string }>()

    const navigateTo = useNavigate()
    const goToSchedules = () => navigateTo('/schedules')
    const [isEditing, setIsEditing] = useState(false)

    const currentValues = useRef<Schedule>({
        id: 0,
        name: '',
        time: ''
    }).current

    const [{ name, time }, setState] = useState<UpdateSchedule>({
        name: '',
        time: ''
    })

    const isButtonDisabled =
        (currentValues.name === name && currentValues.time === time) ||
        name.length == 0 ||
        time.length == 0 ||
        isEditing

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleOnSave = () => {
        SchedulesAPI.edit(currentValues.id, { name, time })
            .then((res) => {
                if (!res.ok) {
                    if (res.code === codes.SCHEDULE_EXISTS) {
                        alert('Este horario ya existe')
                    }

                    if (res.code === codes.FUNCTION_DEPENDS_ON_SCHEDULE) {
                        alert('Este horario ya existe')
                    }

                    return
                }

                goToSchedules()
            })
            .finally(() => {
                setIsEditing(false)
            })
    }

    useEffect(() => {
        SchedulesAPI.get(Number(schedule_id)).then((res) => {
            if (!res.ok) return

            const schedule = res.data
            schedule.time = pageUtils.getTime(schedule.time)
            currentValues.id = schedule.id
            currentValues.name = schedule.name
            currentValues.time = schedule.time
            setState({ ...schedule })
        })
    }, [])

    return (
        <>
            <PageTitle>Editar horario ({currentValues.name})</PageTitle>

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
                    Guardar
                </Button>
                <Button
                    disabled={isEditing}
                    onClick={goToSchedules}
                    type='danger'
                >
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
