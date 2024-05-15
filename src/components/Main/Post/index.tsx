import { useParams } from 'react-router-dom';
import './Post.css'
import { useEffect, useState } from 'react';
import env from '../../../environment';
import { IPost } from '../../../App';

function Post() {
    const { postId } = useParams<{ postId?: string }>();
    const [post, setPost] = useState<IPost>()

    useEffect(() => {
        fetch(`${env.url}/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))
    })

    return(
        <div className="single-post">
            <h1>{post?.title}</h1>
        </div>
    )
}

export default Post