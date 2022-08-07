import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import { Input } from '@components/controls'
import Button from '@components/Button'
import type { NewRoom } from '@typ/data'
import ActionsButtons from '@components/pages/ActionsButtons'
import { columnsWidth, TableHeaders } from './common'
import { codes, RoomsAPI } from '@api'

const { numberWidth, seatsWidth } = columnsWidth

const Create = () => {
    const navigateTo = useNavigate()

    const [isCreating, setIsCreating] = useState(false)

    const [{ number, seats }, setState] = useState<NewRoom>({
        number: 0,
        seats: 0
    })

    const isButtonDisabled = number < 0 || seats < 0 || isCreating

    const goToRooms = () => navigateTo('/rooms')

    const handleOnSave = () => {
        setIsCreating(true)

        RoomsAPI.create({ number, seats })
            .then((res) => {
                if (!res.ok) {
                    if (res.code === codes.ROOM_EXISTS) {
                        alert('Esta sala ya existe')
                        return
                    }
                }

                goToRooms()
            })
            .finally(() => setIsCreating(false))
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.valueAsNumber

        setState((s) => ({ ...s, [name]: value }))
    }

    return (
        <>
            <PageTitle>Agregar sala</PageTitle>

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
                    Agregar
                </Button>
                <Button disabled={isCreating} onClick={goToRooms} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Create
