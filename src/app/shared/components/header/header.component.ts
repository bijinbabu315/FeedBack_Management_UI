import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenProviderService } from '../../../services/token-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /* Roles  of header component */
  private roles: string[];

  /* Determines whether logged in is */
  isLoggedIn = false;

  /* Show admin board of header component */
  showAdminBoard = false;

  userName = '';
  constructor(private tokenService: TokenProviderService, private router: Router) { }

  /**
   * on init
   */
  ngOnInit() {
    this.isLoggedIn = !!this.tokenService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;
      this.userName = user.username;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

    } else {
      this.router.navigate(['/']);
    }

  }

  /**
   * Signs out
   */
  signOut() {
    this.tokenService.signOut();
    window.location.reload();
  }

}
