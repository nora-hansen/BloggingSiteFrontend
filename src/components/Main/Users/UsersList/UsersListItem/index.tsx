import './UsersListItem.css'

function UsersListItem(user: {iconUrl: string, displayName: string, id: number}) {
    return(
        <div className="users-list-item">
            <img src={user.iconUrl ? user.iconUrl : "../hamster.jpg"} alt={`${user.displayName}'s profile image`}></img>
            <h2>{user.displayName}</h2>
        </div>
    )
}

export default UsersListItem;