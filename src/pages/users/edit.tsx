import { useNavigate, useParams } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import PageTitle from '@components/PageTitle'
import { Table, Row, Cell } from '@components/table'
import Button from '@components/Button'
import { UpdateUser, User } from '@typ/data'
import { Input, Select } from '@components/controls'
import ActionsButtons from '@components/pages/ActionsButtons'
import { TableHeaders, roleOptions, columnsWidth } from './common'
import { codes, UsersAPI } from '@api'
import { useStore } from '@nanostores/react'
import { userStore, logout } from '@store/user'

const { nameWidth, roleWidth } = columnsWidth

const Edit = () => {
    const { user_id = 0 } = useParams<{ user_id: string }>()
    const navigateTo = useNavigate()
    const { id: loggedInUserId } = useStore(userStore)

    const currentValues = useRef<User>({
        id: 0,
        name: '',
        role: ''
    })

    const [{ name, role }, setState] = useState<UpdateUser>({
        name: '',
        role: ''
    })

    const [isEditing, setIsEditing] = useState(false)

    const { role: currentRole, name: currentName } = currentValues.current
    const isButtonDisabled =
        (name === currentName && currentRole == role) || isEditing

    useEffect(() => {
        UsersAPI.get(Number(user_id)).then((res) => {
            if (!res.ok) return

            const user = res.data
            currentValues.current.id = user.id
            currentValues.current.name = user.name
            currentValues.current.role = user.role

            setState(() => ({ ...user }))
        })
    }, [])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setState((s) => ({ ...s, [name]: value }))
    }

    const handleRoleChange = (v: string) => {
        setState((s) => ({ ...s, role: v }))
    }

    const goToUsers = () => {
        navigateTo('/users')
    }

    const handleOnSave = () => {
        setIsEditing(true)
        UsersAPI.edit(currentValues.current.id, {
            name,
            role
        })
            .then((res) => {
                if (!res.ok) {
                    if (res.code === codes.USER_NAME_EXISTS) {
                        alert('Este nombre de usuario ya existe')
                        return
                    }
                }

                // If the logged in user modifies itself, logout
                // and redirect to login page.
                if (loggedInUserId == currentValues.current.id) {
                    logout().then(() => {
                        navigateTo('/login')
                    })
                    return
                }

                goToUsers()
            })
            .finally(() => {
                setIsEditing(false)
            })
    }

    return (
        <>
            <PageTitle>Editar usuario ({currentName})</PageTitle>

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

                    <Cell width={roleWidth}>
                        <Select.Container
                            onChange={handleRoleChange}
                            value={role}
                            label='Selecciona un role'
                        >
                            {roleOptions}
                        </Select.Container>
                    </Cell>
                </Row>
            </Table>

            <ActionsButtons>
                <Button
                    type='success'
                    onClick={handleOnSave}
                    disabled={isButtonDisabled}
                >
                    Guardar
                </Button>
                <Button onClick={goToUsers} disabled={isEditing} type='danger'>
                    Cancelar
                </Button>
            </ActionsButtons>
        </>
    )
}

export default Edit
