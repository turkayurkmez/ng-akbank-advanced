import { Component, inject } from '@angular/core';
import { Post } from '../models/post.interface';
import { Store } from '@ngrx/store';
import { addPost } from '../store/action';
import { Observable } from 'rxjs';
import { PostCreatedSuccess } from '../models/postCreatedSuccess.interface';
import { postCreatedSuccessSelector } from '../store/selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  private readonly store = inject(Store);
  postCreatedSuccess$: Observable<PostCreatedSuccess | null> = this.store.select(postCreatedSuccessSelector);

  public addPost(title:string, content:string){
    const _post: Post = {
      id: Date().toString(),
      title: title,
      content:content
    };

    this.store.dispatch(addPost({post:_post}));

    
  };

}
