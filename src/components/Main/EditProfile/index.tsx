import { useState } from 'react'
import './EditProfile.css'

interface IStyle {
    bgColor: string,
    fontColor: string,
    postColor: string
}

function EditProfile()
{
    const [style, setStyle] = useState<IStyle>({
        bgColor: "#aaaaaa",
        fontColor: "#000000",
        postColor: "#FFFFFF"
    })

    const handleSubmit = () => {
        alert("Thank you! Om nom")
    }

    const handleChange = (event) => {
        const inputValue = event.target.value
        const name = event.target.name

        if (name === "bgColor") setStyle({...style, bgColor: inputValue})
        if (name === "fontColor") setStyle({...style, fontColor: inputValue})
        if (name === "postColor") setStyle({...style, postColor: inputValue})
    }

    return(
        <div className="edit-profile">
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit} className="edit-profile-form">
                <div className="profile-colors">
                    <label htmlFor="bgColor">
                        Background color
                        <input type="text" name="bgColor" placeholder="#aaaaaa" onChange={handleChange}></input>
                    </label>
                    <label htmlFor="fontColor">
                        Font color
                        <input type="text" name="fontColor" placeholder="#000000" onChange={handleChange}></input>
                    </label>
                    <label htmlFor="postColor">
                        Post color
                        <input type="text" name="postColor" placeholder="#FFFFFF" onChange={handleChange}></input>
                    </label>
                </div>
                <div className="profile-bio-edit">
                    <label htmlFor="bio">Bio
                        <textarea placeholder="Bio (This should hold the user's existing bio)"></textarea>
                    </label>
                </div>
                <button>Save changes</button>
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