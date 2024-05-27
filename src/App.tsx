import { createContext, useEffect, useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Main from './components/Main'
import Footer from './components/Footer'
import Friends from './components/Friends'

import tempFriends from './temp-friends'
import env from './environment'
import { IFriend, IPost, IUser } from './types'

const defaultFriends: FriendsContextType = 
{
  friends:
  []
}

const defaultPosts: PostsContextType = 
{
  posts:
  [],
  setPosts: () => {}
}

const defaultUser: UserContextType = {
  user: 
  {
    id: 0,
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
  posts: IPost[],
  setPosts: (value: IPost[]) => void
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
    return <img src="https://media4.giphy.com/media/yaUG0KDAcIcWA/200w.gif?cid=6c09b952gl1vqnji38xq9mr8ekzyllm3j7521006dg8q7c7x&ep=v1_gifs_search&rid=200w.gif&ct=g"></img>
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
          <PostContext.Provider value={{posts: posts, setPosts: setPosts}}>
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
