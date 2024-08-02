import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from '../models/postState.interface';
import { addPost, addPostError, addPostSuccess, getPosts, getPostsFailure, getPostsSuccess, removePost } from './action';

export const initialState: PostStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
  postCreatedSuccess:null
};

//reducer fonksiyonları; action tetiklendiğinde ne yapılacağını ve state içinde ne değişeceğini kontrol ederler
export const reducers = createReducer(
  initialState,
  on(getPosts, (state) => ({ ...state, isLoading: true })),

  on(getPostsSuccess,(state,action)=>({...state, isLoading: false, posts: action.posts})),
  
  on(getPostsFailure,(state,action)=>({...state, isLoading:false, error:action.error})),

  on(addPost,(state,action)=>({...state,isLoading:false, posts:[...state.posts, action.post]})),

  on(addPostSuccess,(state,action)=>({...state, error:null, postCreatedSuccess: action.postCreatedSuccess})),

  on(addPostError,(state,action)=>({...state, error:action.error, postCreatedSuccess:null})),

  on(removePost,(state,action)=>({...state,isLoading:false, posts:[...state.posts.filter(p=>p.id!==action.id)]}))
);
