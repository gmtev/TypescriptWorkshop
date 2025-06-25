export interface Post {
    userID : number,
    id: number,
    title: string,
    body: string
}

export type CreatePost = Omit<Post, 'id'>