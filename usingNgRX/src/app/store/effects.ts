import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "../services/posts.service";
import { getPosts, getPostsFailure, getPostsSuccess } from "./action";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class PostsEffects{
    //Yan etkilerin tamamı burada yönetilecek.
    //getPosts action'un yan etkisi; httpClient ya da service aracılığıyla GET request'i göndermek!
    actions$ = inject(Actions);
    postService = inject(PostsService);

    getPosts$ = createEffect(()=>
        this.actions$.pipe(
            ofType(getPosts),
            mergeMap(()=>this.postService.getPosts().pipe(
                map((posts)=> getPostsSuccess({posts})),
                catchError((err)=> of(getPostsFailure({error:err.message})))
            )
        )
    ))
}