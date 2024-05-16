import './UserImageName.css'

function UserImageName(user: {iconUrl: string, displayName: string}) {
    return(
        <div className="profile-image-name">
            <img src={user?.iconUrl ? user?.iconUrl : "../hamster.jpg"}></img>
            <h1>{user?.displayName ? user?.displayName : "Anonymous Hamster"}</h1>
        </div>
    )
}

export default UserImageName