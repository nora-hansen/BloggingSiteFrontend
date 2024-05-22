import { useEffect, useState } from 'react'
import './CommentListItem.css'
import { IUser } from '../../../All/Post'
import env from '../../../../../environment'
import { Link } from 'react-router-dom'

function CommentListItem(comment: {
    id: number,
    content: string
    commentDate: string,
    userID: number, 
    postID: number
}) {
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        fetch(`${env.url}/users/${comment.userID}`)
        .then(response => response.json())
        .then(data => setUser(data))
    }, [comment.userID])

    if(!user) {
        return <img src="https://media4.giphy.com/media/yaUG0KDAcIcWA/200w.gif?cid=6c09b952gl1vqnji38xq9mr8ekzyllm3j7521006dg8q7c7x&ep=v1_gifs_search&rid=200w.gif&ct=g"></img>
    }

    return(
        <div className="comment-list-item">
            <div className="comment-list-item-user">
                <img src={user?.iconUrl ? user?.iconUrl : "../hamster.jpg"}></img>
                <Link to={`/user/${user?.id}`}><p>{user?.displayName}</p></Link>
            </div>
            <p>{comment.content}</p>
        </div>
    )
}

export default CommentListItem;