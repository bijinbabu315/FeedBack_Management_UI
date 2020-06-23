import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing' ;
import { AuthService } from './auth.service';
import { User } from '../model/user' ;

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [HttpClient, AuthService]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    const user: User = {
        id: '1',
        name: 'Test',
        emailId: 'test@test.com',
        role: 'admin',
        isUserAuthentic: 'y'
    };
    expect(service).toBeTruthy();
  });

});
