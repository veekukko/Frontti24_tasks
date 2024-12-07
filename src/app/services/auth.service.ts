import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  // Observable näyttää muille komponenteille
  get userEmail$(): Observable<string> {
    return this.userEmail.asObservable();
  }

  login(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(
      (userCredential) => {
        // Update users email
        this.userEmail.next(userCredential.user?.email || '');
        this.router.navigate(['/admin/main']); // Navigate to admin
      },
      (error) => {
        console.error('Login error', error);
        alert('Authentication failed: ' + error.message);
      }
    );
  }

  // Logout 
  logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      // tyhjentää user emailin
      this.userEmail.next('');
      this.router.navigate(['/']); // Navigate to homepage
    });
  }

  
  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user) => !!user) 
    );
  }
  checkLoggedIn() {
    return this.userEmail.asObservable();
  }

}
