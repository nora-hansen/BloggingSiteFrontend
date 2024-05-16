import './PostContent.css'

function PostContent(post: {title: string | undefined, content: string}) {
    return(
    <div className="single-post-content">
        <h1>{post.title ? post.title : ""}</h1>
        <p>{post.content}</p>
    </div>
    )
}

export default PostContent