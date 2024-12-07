import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/admin/login']); // Redirect to login if not authenticated
        }
        return isAuthenticated;
      })
    );
  }
}