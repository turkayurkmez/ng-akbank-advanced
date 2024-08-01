import { Post } from "./post.interface";

export interface PostStateInterface{
    isLoading: boolean;
    posts: Post[];
    error:string | null

}