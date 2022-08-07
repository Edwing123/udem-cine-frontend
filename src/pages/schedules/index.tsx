import { FC, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import type { Schedule } from '@typ/data'
import { TableHeaders, columnsWidth } from './common'
import Divider from '@components/pages/Divider'
import * as pageUtils from '@utils/pages'
import {
    Table,
    Row,
    Cell,
    Add as AddButton,
    OptionsMenu
} from '@components/table'
import { SchedulesAPI } from '@api'

const { nameWidth, timeWidth } = columnsWidth

type SchedulesRowsProps = {
    schedules: Schedule[]
    onEdit: (id: number) => () => void
    onDelete: (id: number) => () => void
}

const RoomsRows: FC<SchedulesRowsProps> = ({ schedules, onEdit, onDelete }) => {
    return (
        <>
            {schedules.map(({ id, name, time }) => {
                return (
                    <Row key={id}>
                        <Cell width={nameWidth} type='text'>
                            {name}
                        </Cell>

                        <Cell width={timeWidth} type='text'>
                            {time}
                        </Cell>
                        <OptionsMenu
                            title='Opciones'
                            onEdit={onEdit(id)}
                            onDelete={onDelete(id)}
                        />
                    </Row>
                )
            })}
        </>
    )
}

const Rooms = () => {
    const navigateTo = useNavigate()
    const [reload, setReload] = useState(false)
    const [schedules, setSchedules] = useState<Schedule[]>([])

    const goToCreateSchedule = () => {
        navigateTo('/schedules/create')
    }

    const onEdit = pageUtils.id((id: number) => {
        navigateTo(`/schedules/edit/${id}`)
    })

    const onDelete = pageUtils.id((id: number) => {
        const yes = confirm('Eliminar horario?')

        if (!yes) {
            return
        }

        SchedulesAPI.delete(id).then((res) => {
            if (!res.ok) return
            setReload((v) => !v)
        })
    })

    useEffect(() => {
        SchedulesAPI.list().then((res) => {
            if (!res.ok) return
            setSchedules(
                res.data.map((schedule) => ({
                    ...schedule,
                    time: pageUtils.getTime(schedule.time)
                }))
            )
        })
    }, [reload])

    return (
        <>
            <PageTitle>Gestion de horarios</PageTitle>

            <Divider>
                <Table>
                    <TableHeaders />
                    <RoomsRows
                        schedules={schedules}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Table>

                <AddButton
                    title='Agregar horario'
                    onClick={goToCreateSchedule}
                />
            </Divider>
        </>
    )
}

export default Rooms
