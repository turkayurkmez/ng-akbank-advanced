import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  //eğer kişi anonim ise login olmaya yönlendir.
  //bu durumda gitmek istediği url'i bir yerde tut. Böylece login başarılı olursa; bu url'e otomatik yönlendirilecek

  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isUserAuthenticated) {
    return true;
  }

  //gidilmek istenen url'i tut:
  console.log(route.url);
  authService.returnUrl = route.url.join('/');
  console.log(authService.returnUrl);
  //login sayfasına yönlendir.

  return router.navigate(['login']);
};
