import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing' ;
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EventlistComponent } from './eventlist.component';
import { UserService } from 'src/app/services/user.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

describe('EventlistComponent', () => {
  let component: EventlistComponent;
  let fixture: ComponentFixture<EventlistComponent>;
  let userService: UserService;
  let httpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlistComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, BrowserDynamicTestingModule, BrowserAnimationsModule],
      providers: [ UserService, HttpClient]
    }).compileComponents().then(() => {
    fixture = TestBed.createComponent(EventlistComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    httpTestingController = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

}));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
