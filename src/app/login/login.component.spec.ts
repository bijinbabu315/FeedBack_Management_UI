import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing' ;
import { Router} from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { TokenProviderService } from '../services/token-provider.service';
import {  HttpClientModule } from '@angular/common/http';

class MockAuthService {
  login(credentials) {
    return {
      token: 'sadsf'
    };
  }
}
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let authService: AuthService;
  let tokenService: TokenProviderService;
  const mockRouter: any = jasmine.createSpyObj(['navigate']);
  let httpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, HttpClientModule, HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [ { provide: Router, useValue: mockRouter },
      AuthService, TokenProviderService]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      httpTestingController = TestBed.get(HttpTestingController);
      authService = TestBed.get(AuthService);
      spyOn(component, 'authenticateUser').and.callThrough();
      tokenService = TestBed.get(TokenProviderService);
      router = TestBed.get(Router);
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear message', () => {
    component.clearMessage() ;
  });

  it('should login with user name and password', () => {
    component.loginForm.username = 'test' ;
    component.loginForm.password = 'test@123' ;
    component.signIn() ;
  });

  it('should login without user name and password', () => {
    component.loginForm.username = '' ;
    component.loginForm.password = '' ;
    component.signIn() ;
    expect(component.errorMessage).toEqual('Enter Username and Password');
  });

  it('should login with user name', () => {
    component.loginForm.username = 'test' ;
    component.loginForm.password = '' ;
    component.signIn() ;
    expect(component.errorMessage).toEqual('Enter Password');
  });

  it('should login with password', () => {
    component.loginForm.username = '' ;
    component.loginForm.password = 'test' ;
    component.signIn() ;
    expect(component.errorMessage).toEqual('Enter Username');
  });

  it('is empty check', () => {
    let result = component.isEmpty('') ;
    expect(result).toEqual(true);
    result = component.isEmpty('test') ;
    expect(result).toEqual(false);
  });

});
