/*
   Kaynak üzerinde gerçekleşecek her eylem bir action'dur. Her action'un bir type özelliği vardır.
   Aynı zamanda bu action çalıştıktan sonra geriye dönecek olan sonuç da belirtilebilir.

   - yeni makale ekle

 */

import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post.interface";
import { PostCreatedSuccess } from "../models/postCreatedSuccess.interface";

export const getPosts = createAction('[Posts] Get Posts');  
export const getPostsSuccess = createAction('[Posts] Get Posts Success', props<{posts: Post[]}>());
export const getPostsFailure = createAction('[Posts] Get Posts Failure', props<{error:string}>());

//Dikkat: ilk olarak servis kullanmamaya karar verdik (daha sonra eklenecek):
export const addPost = createAction('[Posts] Create Post', props<{post:Post}>())
//Dikkat: addPost action'unun bir yan etkisi olduğuna ve bu yan etkinin action ile gelen post'u service ile eklemesi gerektiğine karar verdik
//Yani httpClient post fonksiyonu, hata da verebilir, başarılı da olabilir.
export const addPostSuccess = createAction('[Posts] Create Post Success', props<{postCreatedSuccess:PostCreatedSuccess}>());
export const addPostError= createAction('[Posts] Create Post Failure', props<{error:string}>());

export const removePost = createAction('[Posts] Remove Post', props<{id:string}>())




