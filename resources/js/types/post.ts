export interface Post {
    id: number;
    title: string;
    content: string;
    author_id: number;
    created_at: string;
    updated_at: string;
}

export type PostPayload = Omit<Post, 'created_at' | 'updated_at' | 'id' | 'author_id'>