import { createContext, useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Main from './components/Main'
import Footer from './components/Footer'
import Friends from './components/Friends'

import tempFriends from './temp-friends'

interface IFriend {
  name: string,
  iconUrl: string
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

type FriendsContextType = {
  friends: IFriend[]
}

const FriendContext = createContext<FriendsContextType>(defaultFriends)

function App() {

  const [friends, setFriends] = useState<IFriend[]>(tempFriends)

  return (
    <div className="blog-fe">
      <TopBar />
      <div className="middle">
        <div></div>
        <Main />
        <FriendContext.Provider value={{friends: friends}}>
          <Friends />
        </FriendContext.Provider>
      </div>
      <Footer />
    </div>
  )
}

export {App, FriendContext}
