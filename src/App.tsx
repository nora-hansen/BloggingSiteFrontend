import { createContext, useEffect, useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Main from './components/Main'
import Footer from './components/Footer'
import Friends from './components/Friends'

import tempFriends from './temp-friends'
import env from './environment'

interface IFriend {
  id: number,
  name: string,
  iconUrl: string
}

export interface IPost {
  id: number,
  title: string,
  content: string,
  postDate: string,
  userID: number,
  visibility: number,
  isDraft: boolean
}

export interface IUser {
  id: number,
  email: string,
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
      id: 0,
      name: "null",
      iconUrl: "null"
    }
  ]
}

const defaultPosts: PostsContextType = 
{
  posts:
  []
}

const defaultUser: UserContextType = {
  user: 
  {
    id: 1,
    email: "",
    displayName: "",
    bio: "",
    iconUrl: "",
    profileId: 0
  },
  bearer: "",
  setBearer: () => {},
  setUser: () => {}
}

type FriendsContextType = {
  friends: IFriend[]
}

type PostsContextType = {
  posts: IPost[]
}

type UserContextType = {
  bearer: string,
  setBearer: (data: string) => void,
  user: IUser,
  setUser: (data: object) => void
}

const FriendContext = createContext<FriendsContextType>(defaultFriends)
const PostContext = createContext<PostsContextType>(defaultPosts)
const UserContext = createContext<UserContextType>(defaultUser)

function App() 
{
  const [friends, setFriends] = useState<IFriend[]>(tempFriends)
  const [posts, setPosts] = useState<IPost[]>([])
  const [user, setUser] = useState<IUser>()
  const [bearer, setBearer] = useState<string>("")

  useEffect(() => {
    fetch(`${env.url}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  if(posts.length === 0) {
    return <p>Loading posts...</p>
  }

  return (
    <div className="blog-fe">
      <UserContext.Provider value={{
        user: user, 
        setUser: setUser, 
        bearer: bearer, 
        setBearer: setBearer
      }}>
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
