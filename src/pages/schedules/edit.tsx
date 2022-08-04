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
import { SchedulesAPI } from '@api'

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
    })

    const [{ name, time }, setState] = useState<UpdateSchedule>({
        name: '',
        time: ''
    })

    const isButtonDisabled =
        (currentValues.current.name === name &&
            currentValues.current.time === time) ||
        name.length == 0 ||
        time.length == 0 ||
        isEditing

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleOnSave = () => {
        SchedulesAPI.edit(currentValues.current.id, { name, time })
            .then(({ ok, ...props }) => {
                if (!ok && 'reason' in props) {
                    alert(props.reason)
                    return
                }

                goToSchedules()
            })
            .finally(() => {
                setIsEditing(false)
            })
    }

    useEffect(() => {
        SchedulesAPI.get(Number(schedule_id)).then((schedule) => {
            currentValues.current.id = schedule.id
            currentValues.current.name = schedule.name
            currentValues.current.time = schedule.time
            setState({ ...schedule })
        })
    }, [])

    return (
        <>
            <PageTitle>Editar horario ({name})</PageTitle>

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
