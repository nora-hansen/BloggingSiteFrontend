import { useContext, useEffect, useState } from 'react'
import './ProfilePost.css'
import { IPost, PostContext, UserContext } from '../../../../App'
import { useNavigate, useParams } from 'react-router-dom'
import CommentList from '../../Post/CommentList'
import { IProfile } from '..'
import env from '../../../../environment'

function ProfilePost(p: {posts: IPost[], profile: IProfile, setPosts: (IPost[])}) 
{
    const [post, setPost] = useState<IPost>()
    const { id } = useParams<{ id?: string }>();
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)
    const navigate = useNavigate()

    useEffect(() => {
        setPost(p.posts.filter(pp => pp.id === Number(id))[0])
    }, [id])

    if (post === undefined)
        return <></>

    const handleDelete = (event) => {
        if (confirm("Are you sure you want to delete this post?")) {
            fetch(`${env.url}/posts/${post.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userContext.bearer}`
                }
            })
            .then(response => {
                if(response.status !== 204)
                    throw new Error("An error occured :(")
            })
            .catch(error => console.error(error))

            p.setPosts(p.posts.filter(p => p.id !== post.id))
            postContext.setPosts(postContext.posts.filter(p => p.id !== post.id))
            // navigate(`/user/${}`)
        }
    }

    return(
        <>
            <div className="profile-post"
            style={{backgroundColor: p.profile.postColor, color: p.profile.fontColor}}
            >
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p className="post-date">{post.postDate}</p>
                {userContext.user.id === post.userID &&
                    <button onClick={handleDelete} className="delete-button"><img src="../../../bin.png"></img></button>
                }
            </div>
            <CommentList comments={post.comments} />
        </>
    )
}

export default ProfilePost