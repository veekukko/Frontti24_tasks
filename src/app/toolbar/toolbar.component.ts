import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  userEmail$: Observable<string>;

  constructor(private authService: AuthService) {
    // Subscribe to the email observable from AuthService
    this.userEmail$ = this.authService.userEmail$;
  }

  logout(): void {
    this.authService.logout();
  }
}
