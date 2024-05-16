import './Bio.css'

function Bio(user: {fontColor: string, postColor: string, bio: string}) {
    return(
        <div className="profile-bio"                 
        style={{backgroundColor: user?.postColor ?  user?.postColor : "#FFFFFF", color:  user?.fontColor ?  user?.fontColor : "#000000"}} >
            <p>{user?.bio}</p>
        </div>
    )
}

export default Bio