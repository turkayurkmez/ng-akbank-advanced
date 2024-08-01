/*
   Kaynak üzerinde gerçekleşecek her eylem bir action'dur. Her action'un bir type özelliği vardır.
   Aynı zamanda bu action çalıştıktan sonra geriye dönecek olan sonuç da belirtilebilir.

   - yeni makale ekle

 */

import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post.interface";

export const getPosts = createAction('[Posts] Get Posts');  
export const getPostsSuccess = createAction('[Posts] Get Posts Success', props<{posts: Post[]}>());
export const getPostsFailure = createAction('[Posts] Get Posts Failure', props<{error:string}>());


