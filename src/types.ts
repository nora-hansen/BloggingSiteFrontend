export interface IFriend {
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
    profileId: number
  }
  
  export interface IComment {
    id: number,
    content: string,
    commentDate: string,
    userID: number,
    postID: number,
    commentingUser: IUser
  }