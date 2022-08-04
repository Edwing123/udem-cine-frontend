import { useNavigate, useParams } from 'react-router-dom'
import { ChangeEvent, useEffect, useRef } from 'react'
import { useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { UpdateRoom, Room } from '@typ/data'
import { Input } from '@components/controls'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, columnsWidth } from './common'
import { RoomsAPI } from '@api'

const { numberWidth, seatsWidth } = columnsWidth

const Edit = () => {
    const { room_id } = useParams<{ room_id: string }>()
    const navigateTo = useNavigate()
    const [isEditing, setIsEditing] = useState(false)

    const currentValues = useRef<Room>({
        number: 0,
        seats: 0
    })

    const [{ number, seats }, setState] = useState<UpdateRoom>({
        number: 0,
        seats: 0
    })

    const goToRooms = () => navigateTo('/rooms')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.valueAsNumber

        setState((s) => ({ ...s, [name]: value }))
    }

    const isButtonDisabled =
        (currentValues.current.number === number &&
            currentValues.current.seats === seats) ||
        number < 0 ||
        seats < 0 ||
        isEditing

    const handleOnSave = () => {
        setIsEditing(true)

        RoomsAPI.edit(currentValues.current.number, { number, seats })
            .then(({ ok, ...props }) => {
                if (!ok && 'reason' in props) {
                    alert(props.reason)
                    return
                }

                goToRooms()
            })
            .finally(() => setIsEditing(false))
    }

    useEffect(() => {
        RoomsAPI.get(Number(room_id)).then((room) => {
            currentValues.current.number = room.number
            currentValues.current.seats = room.seats
            setState(() => ({ ...room }))
        })
    }, [])

    return (
        <>
            <PageTitle>Editar sala ({currentValues.current.number})</PageTitle>

            <Table>
                <TableHeaders />

                <Row>
                    <Cell width={numberWidth} type='text'>
                        <Input
                            type='number'
                            inputMode='numeric'
                            placeholder='Numero'
                            spellCheck='false'
                            value={number}
                            name='number'
                            onChange={handleInputChange}
                        />
                    </Cell>

                    <Cell width={seatsWidth} type='text'>
                        <Input
                            type='number'
                            inputMode='numeric'
                            min='0'
                            placeholder='Numero de asientos'
                            spellCheck='false'
                            value={seats}
                            name='seats'
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
                <Button disabled={isEditing} onClick={goToRooms} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
