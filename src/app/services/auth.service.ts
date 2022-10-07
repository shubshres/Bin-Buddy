import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  async register({ email, password }) {
    try {
      const resident = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return resident;
    } catch (e) {
      return null;
    }
  }
  
  async login({ email, password }) {
    try {
      const resident = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return resident;
    } catch (e) {
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }
}
