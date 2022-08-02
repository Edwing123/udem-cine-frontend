import { useNavigate, useParams } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { UpdateRoom } from '@typ/data'
import { Input } from '@components/controls'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, columnsWidth } from './common'

const { numberWidth, seatsWidth } = columnsWidth

const Edit = () => {
    const { room_id } = useParams<{ room_id: string }>()
    const navigateTo = useNavigate()

    const [{ number, seats }, setState] = useState<UpdateRoom>({
        number: 0,
        seats: 0
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    return (
        <>
            <PageTitle>Editar sala (id={room_id!})</PageTitle>

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
                <Button type='success'>Guardar</Button>
                <Button onClick={() => navigateTo('/rooms')} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
