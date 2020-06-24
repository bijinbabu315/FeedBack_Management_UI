import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing' ;
import { AuthService } from './auth.service';

describe('AuthenticationService', () => {
  let httpTestingController;
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [HttpClient, AuthService]
  });
    service = TestBed.get(AuthService);
    httpTestingController = TestBed.get(HttpTestingController);
});


  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should call login service', () => {
    spyOn(service, 'login').and.callThrough();
    service.login({username: '', password: ''});
    expect(service.login).toHaveBeenCalled();
  });

});
