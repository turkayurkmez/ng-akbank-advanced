import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Post } from '../models/post.interface';
import { PostCreatedSuccess } from '../models/postCreatedSuccess.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Observable<Post[]>{

    let posts: Post[] = [
      {id:'1',  title:'Başlık 1', content:'İçerik 1'},
      {id:'2',  title:'Başlık 2', content:'İçerik 2'},

    ]
    return of(posts);
  }

  createPost(post:Post):Observable<PostCreatedSuccess>{
    console.log(`${post.title} eklendi`);
    return of({id:post.id, title:post.title!})
  }


}
