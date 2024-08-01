import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { PostsEffects } from './store/effects';


//provideStore({postState: reducers}) ifadesindeki postState, appStateInterface'inin bir özelliği.
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({postState: reducers}), provideEffects(PostsEffects)]
};
