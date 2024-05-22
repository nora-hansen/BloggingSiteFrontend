import { useContext } from 'react'
import env from '../../../../../../environment'
import './DraftButtonPanel.css'
import { UserContext } from '../../../../../../App'

function DraftButtonPanel(draft: {draftId: number}) {
    const userContext = useContext(UserContext)

    const handleClick = (event) => {
        if (event.target.name === "postnow") {
            fetch(`${env.url}/posts/${draft.draftId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${userContext.bearer}`
                    },
                    body: JSON.stringify({
                        isDraft: false
                    })
                }
            )
        }

        if (event.target.name === "delete") {
            if (confirm("Are you sure you want to delete this draft?")) {
                fetch(`${env.url}/posts/${draft.draftId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${userContext.bearer}`
                    }
                })
            }
        }
    }

    return(
        <>
            <button name="postnow" onClick={handleClick}>Post now</button>
            <button name="edit" onClick={handleClick}>Edit</button>
            <button name="delete" onClick={handleClick}>Delete</button>
        </>
    )
}

export default DraftButtonPanel