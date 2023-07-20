// auth.service.ts
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-auth-service',
  templateUrl: './auth-service.component.html',
  styleUrls: ['./auth-service.component.scss']
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Replace this with your actual authentication logic (e.g., API call)
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
