import { PostStateInterface } from "./postState.interface";


//Tüm state'leri (ngrx tarafından depolanan ve takip edilenleri) tek bir çatıda topladık:
export interface AppStateInterface{
    postsState:PostStateInterface
}