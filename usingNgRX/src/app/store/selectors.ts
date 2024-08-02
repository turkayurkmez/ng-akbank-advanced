import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../models/appState.interface";

/*
Bir state'in belirli bir kısmına erişebilen özel fonksiyonlardır.
*/
export const selectFeature = (state: AppStateInterface)=> state.postsState;

//1. state içindeki isLoading'e erişmek:
export const isLoadingSelector = createSelector(
    selectFeature, (state)=>state.isLoading
);

export const postsSelector = createSelector(
    selectFeature, (state)=>state.posts
);

export const errorSelector = createSelector(
    selectFeature, (state)=>state.error
);

export const postCreatedSuccessSelector = createSelector(
   selectFeature, (state)=>state.postCreatedSuccess
);



