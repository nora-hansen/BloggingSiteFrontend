import './UsersList.css'
import env from '../../../../environment'
import { useEffect, useState } from 'react'

import UsersListItem from './UsersListItem'
import { IUser } from '../../../../types'

function UsersList() {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch(`${env.url}/users`)
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])


    if(!users) 
        return <img src="https://media4.giphy.com/media/yaUG0KDAcIcWA/200w.gif?cid=6c09b952gl1vqnji38xq9mr8ekzyllm3j7521006dg8q7c7x&ep=v1_gifs_search&rid=200w.gif&ct=g"></img>

    return(
        <div className="users-list">
            {users.map((user, index) => 
                <UsersListItem 
                    key={index}
                    displayName={user.displayName}
                    iconUrl={user.iconUrl}
                    id={user.id}
                />
            )}
        </div>
    )
}

export default UsersList;