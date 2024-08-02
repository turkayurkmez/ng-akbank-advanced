import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsService } from '../services/posts.service';
import {
  addPost,
  addPostError,
  addPostSuccess,
  getPosts,
  getPostsFailure,
  getPostsSuccess,
} from './action';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class PostsEffects {
  //Yan etkilerin tamamı burada yönetilecek.
  //getPosts action'un yan etkisi; httpClient ya da service aracılığıyla GET request'i göndermek!
  actions$ = inject(Actions);
  postService = inject(PostsService);

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => getPostsSuccess({ posts })),
          catchError((err) => of(getPostsFailure({ error: err.message })))
        )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPost),
      switchMap((arg) =>
        this.postService.createPost(arg.post).pipe(
          map((success) => addPostSuccess({ postCreatedSuccess: success })),
          catchError((error) => of(addPostError({ error: error })))
        )
      )
    )
  );
}
