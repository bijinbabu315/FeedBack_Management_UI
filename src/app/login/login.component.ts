import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenProviderService } from '../services/token-provider.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

/**
 * LoginComponent Component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy {

  /* Login form  of login component */
  loginForm = { username: '', password: '' };

  /* Determines whether logged in is */
  isLoggedIn = false;

  /* Determines whether login failed is  */
  isLoginFailed = false;

  /* Error message of login component */
  errorMessage: string;

  constructor(private authService: AuthService,
              private tokenService: TokenProviderService,
              private router: Router) { }

  ngOnInit() {
  }

 /**
  * Signs in
  * navigate to dash board if its success
  */
 signIn() {
    this.errorMessage = '' ;
    if (this.isEmpty(this.loginForm.username) && this.isEmpty(this.loginForm.password)) {
     this.errorMessage = 'Enter Username and Password';
     return false;
    } else if (this.isEmpty(this.loginForm.username)) {
      this.errorMessage = 'Enter Username';
      return false;
    } else if (this.isEmpty(this.loginForm.password)) {
      this.errorMessage = 'Enter Password';
      return false;
    }

    this.authenticateUser();

    console.log('Logged In!!!!!!') ;

  }

   /**
    * Determines whether empty is
    * @param value Value
    * @returns  boolean
    */
   isEmpty(value) {
    return value ? false : true ;
  }

  /**
   * Authenticates user
   */
  authenticateUser() {
   this.authService.login(this.loginForm).subscribe(
      data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.isLoginFailed = true;
        this.errorMessage = 'Invalid Login';
      }
    );
  }

  /**
   * Clears message
   */
  clearMessage() {
    this.errorMessage = '';
  }

  /**
   * on destroy
   */
  ngOnDestroy(): void {
  }
}
