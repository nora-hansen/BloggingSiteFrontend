import { useContext, useEffect, useState } from 'react'
import DraftList from './DraftList'
import './DraftsPage.css'
import { IPost, UserContext } from '../../../App'
import env from '../../../environment'
import { Navigate } from 'react-router-dom'

function Drafts() {
    const userContext = useContext(UserContext)
    const [drafts, setDrafts] = useState<IPost[]>()

    useEffect(() => {
        if (userContext.bearer !== "")
            fetch(`${env.url}/posts?userid=${userContext.user?.id}&isdraft=true`)
            .then(response => response.json())
            .then(data => setDrafts(data))
    }, [userContext.user?.id])

    if (userContext.bearer === "") {
        return <Navigate to="/login" />
    }
    if (!drafts) return <p>Loading...</p>

    return(
        <div className="drafts">
            <h1>Drafts</h1>
            {<DraftList drafts={drafts}/>}
        </div>
    )
}

export default Drafts