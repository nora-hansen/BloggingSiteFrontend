import { createContext, useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Main from './components/Main'
import Footer from './components/Footer'
import Friends from './components/Friends'

import tempFriends from './temp-friends'
import tempPosts from './temp-posts'
import tempUser from './temp-user'

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

interface IUser {
  id: number,
  email: string,
  password: string,
  displayName: string,
  bio: string,
  iconUrl: string,
  profileId: number
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

const defaultUser: UserContextType = {
  user: 
  {
    id: 1,
    email: "",
    password: "",
    displayName: "",
    bio: "",
    iconUrl: "",
    profileId: 0
  }
}

type FriendsContextType = {
  friends: IFriend[]
}

type PostsContextType = {
  posts: IPost[]
}

type UserContextType = {
  user: IUser
}

const FriendContext = createContext<FriendsContextType>(defaultFriends)
const PostContext = createContext<PostsContextType>(defaultPosts)
const UserContext = createContext<UserContextType>(defaultUser)

function App() {

  const [friends, setFriends] = useState<IFriend[]>(tempFriends)
  const [posts, setPosts] = useState<IPost[]>(tempPosts)
  const [user, setUser] = useState<IUser>(tempUser)

  return (
    <div className="blog-fe">
      <UserContext.Provider value={{user: user}}>
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
      </UserContext.Provider>
      <Footer />
    </div>
  )
}

export {
  App, 
  FriendContext, 
  PostContext,
  UserContext
}
