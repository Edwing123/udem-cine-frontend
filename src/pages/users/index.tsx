import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import type { User } from '@typ/data'
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
import { UsersAPI } from '@api'
import { userStore } from '@store/user'
import { useStore } from '@nanostores/react'

const { nameWidth, roleWidth } = columnsWidth

type UsersRowsProps = {
    users: User[]
    onEdit: (id: number) => () => void
    onDelete: (id: number) => () => void
}

const UsersRows: FC<UsersRowsProps> = ({ users, onEdit, onDelete }) => {
    return (
        <>
            {users.map(({ id, name, role }) => {
                return (
                    <Row key={id}>
                        <Cell width={nameWidth} type='text'>
                            {name}
                        </Cell>

                        <Cell width={roleWidth} type='text'>
                            {role}
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

const Users = () => {
    const navigateTo = useNavigate()
    const [users, setUsers] = useState<User[]>([])
    const [reload, setReload] = useState(false)
    const { id: loggedInUserId } = useStore(userStore)

    const goToCreateUser = () => {
        navigateTo('/users/create')
    }

    const onEdit = pagesUtils.id((id: number) => {
        navigateTo(`/users/edit/${id}`)
    })

    const onDelete = pagesUtils.id((id: number) => {
        if (id === loggedInUserId) {
            alert('No puedes eliminarte a ti mismo!')
            return
        }

        const yes = confirm('Eliminar usuario?')

        if (!yes) {
            return
        }

        UsersAPI.delete(id).then(() => {
            setReload((v) => !v)
        })
    })

    useEffect(() => {
        UsersAPI.list().then((users) => {
            setUsers(users)
        })
    }, [reload])

    return (
        <>
            <PageTitle>Gestion de usuarios</PageTitle>

            <Divider>
                <Table>
                    <TableHeaders />
                    <UsersRows
                        users={users}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Table>

                <AddButton title='Agregar usuario' onClick={goToCreateUser} />
            </Divider>
        </>
    )
}

export default Users
