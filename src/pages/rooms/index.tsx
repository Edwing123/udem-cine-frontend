import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import type { Room } from '@typ/data'
import { TableHeaders, columnsWidth } from './common'
import Divider from '@components/pages/Divider'
import * as pagesUtils from '@utils/pages'
import {
    Table,
    Row,
    Cell,
    Add as AddButton,
    OptionsMenu
} from '@components/table'
import { RoomsAPI } from '@api'

const { numberWidth, seatsWidth } = columnsWidth

type RoomsRowsProps = {
    rooms: Room[]
    onEdit: (id: number) => () => void
    onDelete: (id: number) => () => void
}

const RoomsRows: FC<RoomsRowsProps> = ({ rooms, onEdit, onDelete }) => {
    return (
        <>
            {rooms.map(({ number, seats }) => {
                return (
                    <Row key={number}>
                        <Cell width={numberWidth} type='text'>
                            {number}
                        </Cell>

                        <Cell width={seatsWidth} type='text'>
                            {seats}
                        </Cell>
                        <OptionsMenu
                            title='Opciones'
                            onEdit={onEdit(number)}
                            onDelete={onDelete(number)}
                        />
                    </Row>
                )
            })}
        </>
    )
}

const Rooms = () => {
    const navigateTo = useNavigate()
    const [rooms, setRooms] = useState<Room[]>([])

    const [reload, setReload] = useState(false)

    useEffect(() => {
        RoomsAPI.list().then((rooms) => {
            setRooms(rooms)
        })
    }, [reload])

    const goToCreateRoom = () => {
        navigateTo('/rooms/create')
    }

    const onEdit = pagesUtils.id((id: number) => {
        navigateTo(`/rooms/edit/${id}`)
    })

    const onDelete = pagesUtils.id((id: number) => {
        const yes = confirm('Eliminar sala?')

        if (!yes) {
            return
        }

        RoomsAPI.delete(id).then(() => {
            setReload((v) => !v)
        })
    })

    return (
        <>
            <PageTitle>Gestion de salas</PageTitle>

            <Divider>
                <Table>
                    <TableHeaders />
                    <RoomsRows
                        rooms={rooms}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Table>

                <AddButton title='Agregar sala' onClick={goToCreateRoom} />
            </Divider>
        </>
    )
}

export default Rooms
