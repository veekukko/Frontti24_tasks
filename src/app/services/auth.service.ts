import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  //Login
  login(email: string, password: string): Promise<void>{
    return this.afAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        this.router.navigate(['/admin/main']); // Navigate admin success
      },
      (error) => {
        console.error('Login error', error);
        alert('Authentication failed: ' + error.message); // Error 
      }
    );
  }

logout(): Promise<void> {
  return this.afAuth.signOut().then(() => {
    this.router.navigate(['/']); //Navigate homepage
  });
}


isAuthenticated(): Promise<boolean> {
  return new Promise ((resolve) => {
    this.afAuth.onAuthStateChanged((user) => {
      resolve(!!user);
    })
  })
};
};