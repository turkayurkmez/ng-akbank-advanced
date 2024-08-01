import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../models/appState.interface';
import { getPosts } from '../store/action';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, postsSelector } from '../store/selectors';
import { Post } from '../models/post.interface';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  constructor(private store: Store<AppStateInterface>) {}
  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

  getData():void{   
  }

  isLoading$ : Observable<boolean> = this.store.select(isLoadingSelector);
  posts$ : Observable<Post[]> = this.store.select(postsSelector);
  error$ : Observable<string|null> = this.store.select(errorSelector);


  

}
