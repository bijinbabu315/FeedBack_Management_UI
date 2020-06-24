import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing' ;

describe('UserService', () => {
  let service: UserService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [HttpClient, UserService]
  }));

  it('should be created', () => {
    service = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should be call getAllEvents$', () => {
    service = TestBed.get(UserService);
    spyOn(service, 'getAllEvents$').and.callThrough();
    service.getAllEvents$();
    expect(service.getAllEvents$).toHaveBeenCalled();
  });
});
