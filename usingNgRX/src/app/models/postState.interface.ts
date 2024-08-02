import { Post } from "./post.interface";
import { PostCreatedSuccess } from "./postCreatedSuccess.interface";

export interface PostStateInterface{
    isLoading: boolean;
    posts: Post[];
    error:string | null,
    postCreatedSuccess: PostCreatedSuccess | null

}