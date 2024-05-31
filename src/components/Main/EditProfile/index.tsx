import { useContext, useState } from 'react'
import './EditProfile.css'
import { UserContext } from '../../../App'
import env from '../../../environment'

interface IStyle {
    bgColor: string,
    fontColor: string,
    postColor: string,
    bio: string
}

function EditProfile()
{
    const userContext = useContext(UserContext)

    const [style, setStyle] = useState<IStyle>({
        bgColor: "",
        fontColor: "",
        postColor: "",
        bio: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`${env.url}/profiles/${userContext.user?.profileId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userContext.bearer}`
            },
            body: JSON.stringify(style)   
        })
    }

    const handleChange = (event) => {
        const inputValue = event.target.value
        const name = event.target.name

        if (name === "bgColor") setStyle({...style, bgColor: inputValue})
        if (name === "fontColor") setStyle({...style, fontColor: inputValue})
        if (name === "postColor") setStyle({...style, postColor: inputValue})
        if (name === "bio") setStyle({...style, bio: inputValue})
    }

    return(
        <div className="edit-profile">
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit} className="edit-profile-form">
                <div className="profile-colors">
                    <label htmlFor="bgColor">
                        Background color
                        <input type="color" name="bgColor" value={style.bgColor} onChange={handleChange}></input>
                    </label>
                    <label htmlFor="fontColor">
                        Font color
                        <input type="color" name="fontColor" value={style.fontColor} onChange={handleChange}></input>
                    </label>
                    <label htmlFor="postColor">
                        Post color
                        <input type="color" name="postColor" value={style.postColor} onChange={handleChange}></input>
                    </label>
                </div>
                <div className="profile-bio-edit">
                    <label htmlFor="bio">Bio
                        <textarea name="bio" placeholder="Bio (This should hold the user's existing bio)" onChange={handleChange}></textarea>
                    </label>
                </div>
                <input type="submit" value="Save changes"></input>
            </form>
            <h1>Color preview</h1>
            <div className="profile-preview" 
            style={{backgroundColor: style.bgColor ? style.bgColor : "#aaaaaa"}}
            >
                <div className="profile-preview-post"
                style={{backgroundColor: style.postColor ? style.postColor : "#FFFFFF",
                color: style.fontColor ? style.fontColor : "#000000"
                }}>
                    <h1>Lorem Ipsum</h1>
                    <p>Dolor sit amet, , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default EditProfile