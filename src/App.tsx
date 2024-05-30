import { createContext, useEffect, useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Main from './components/Main'
import Footer from './components/Footer'

import env from './environment'

export interface IPost {
  id: number,
  title: string,
  content: string,
  postDate: string,
  userID: number,
  visibility: number,
  isDraft: boolean,
  comments: IComment[],
  postingUser: IUser
}

export interface IUser {
  id: number,
  email: string,
  displayName: string,
  bio: string,
  iconUrl: string,
  profileId: number,
  friends: IUser[]
}

export interface IComment {
  id: number,
  content: string,
  commentDate: string,
  userID: number,
  postID: number,
  commentingUser: IUser
}

export interface IFriendRequest {
  senderId: number,
  senderName: string,
  senderIconUrl: string
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
    profileId: 0,
    friends: []
  },
  bearer: "",
  setBearer: () => {},
  setUser: () => {},
  friendRequests: [],
  setFriendRequests: () => {}
}

type PostsContextType = {
  posts: IPost[],
  setPosts: (value: IPost[]) => void
}

type UserContextType = {
  bearer: string,
  setBearer: (data: string) => void,
  user: IUser,
  setUser: (data: object) => void,
  friendRequests: IFriendRequest[],
  setFriendRequests: (data: object[]) => void
}

const PostContext = createContext<PostsContextType>(defaultPosts)
const UserContext = createContext<UserContextType>(defaultUser)

function App() 
{
  const [posts, setPosts] = useState<IPost[]>([])
  const [user, setUser] = useState<IUser>({})
  const [bearer, setBearer] = useState<string>("")
  const [friendRequests, setFriendRequests] = useState<IFriendRequest[]>([])

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
        setBearer: setBearer,
        friendRequests: friendRequests,
        setFriendRequests: setFriendRequests
      }}>
        <TopBar />
        <div className="middle">
          <div></div>
          <PostContext.Provider value={{posts: posts, setPosts: setPosts}}>
            <Main />
          </PostContext.Provider>
        </div>
      </UserContext.Provider>
      <Footer />
    </div>
  )
}

export {
  App, 
  PostContext,
  UserContext
}
