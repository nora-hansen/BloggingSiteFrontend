import { useEffect, useState } from 'react'
import './ProfilePost.css'
import { IPost } from '../../../../App'
import { useParams } from 'react-router-dom'
import CommentList from '../../Post/CommentList'
import { IProfile } from '..'

function ProfilePost(p: {posts: IPost[], profile: IProfile}) 
{
    const [post, setPost] = useState<IPost>()
    const { id } = useParams<{ id?: string }>();

    useEffect(() => {
        setPost(p.posts.filter(pp => pp.id === Number(id))[0])
    }, [id])

    if (post === undefined)
        return <></>

    return(
        <div className="profile-post"
        style={{backgroundColor: p.profile.postColor, color: p.profile.fontColor}}
        >
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.postDate}</p>
            <CommentList comments={post.comments} />
        </div>
    )
}

export default ProfilePost