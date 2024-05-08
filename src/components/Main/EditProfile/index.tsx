import './EditProfile.css'

function EditProfile()
{
    const handleSubmit = () => {
        alert("Thank you! Om nom")
    }

    return(
        <div className="edit-profile">
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit} className="edit-profile-form">
                <div className="profile-colors">
                    <label htmlFor="bgColor">
                        Background color
                        <input type="text" placeholder="#FFFFFF"></input>
                    </label>
                    <label htmlFor="fontColor">
                        Font color
                        <input type="text" placeholder="#000000"></input>
                    </label>
                    <label htmlFor="postColor">
                        Post color
                        <input type="text" placeholder="#FFFFFF"></input>
                    </label>
                </div>
                <div className="profile-bio-edit">
                    <label htmlFor="bio">Bio
                        <textarea placeholder="Bio (This should hold the user's existing bio)"></textarea>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default EditProfile