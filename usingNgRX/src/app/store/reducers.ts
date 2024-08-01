import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from '../models/postState.interface';
import { getPosts, getPostsFailure, getPostsSuccess } from './action';

export const initialState: PostStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
};

//reducer fonksiyonları; action tetiklendiğinde ne yapılacağını ve state içinde ne değişeceğini kontrol ederler
export const reducers = createReducer(
  initialState,
  on(getPosts, (state) => ({ ...state, isLoading: true })),

  on(getPostsSuccess,(state,action)=>({...state, isLoading: false, posts: action.posts})),
  
  on(getPostsFailure,(state,action)=>({...state, isLoading:false, error:action.error}))
);
