import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing' ;
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const routes: Routes = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, RouterModule.forRoot(routes) ],
      declarations: [ LoginComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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
