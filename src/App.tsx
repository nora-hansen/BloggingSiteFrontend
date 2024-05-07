import { createContext, useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Main from './components/Main'
import Footer from './components/Footer'
import Friends from './components/Friends'

import tempFriends from './temp-friends'
import tempPosts from './temp-posts'

interface IFriend {
  name: string,
  iconUrl: string
}

interface IPost {
  title: string,
  content: string,
  postDate: string,
  userId: number,
  visibility: number,
  isDraft: boolean
}

const defaultFriends: FriendsContextType = 
{
  friends:
  [  
    {
    name: "null",
    iconUrl: "null"
    }
  ]
}

const defaultPosts: PostsContextType = 
{
  posts:
  [
    {
      title: "null",
      content: "null",
      postDate: "null",
      userId: 0,
      visibility: 0,
      isDraft: false
    }
  ]
}

type FriendsContextType = {
  friends: IFriend[]
}

type PostsContextType = {
  posts: IPost[]
}

const FriendContext = createContext<FriendsContextType>(defaultFriends)
const PostContext = createContext<PostsContextType>(defaultPosts)

function App() {

  const [friends, setFriends] = useState<IFriend[]>(tempFriends)
  const [posts, setPosts] = useState<IPost[]>(tempPosts)

  return (
    <div className="blog-fe">
      <TopBar />
      <div className="middle">
        <div></div>
        <PostContext.Provider value={{posts: posts}}>
          <Main />
        </PostContext.Provider>
        <FriendContext.Provider value={{friends: friends}}>
          <Friends />
        </FriendContext.Provider>
      </div>
      <Footer />
    </div>
  )
}

export {
  App, 
  FriendContext, 
  PostContext
}
