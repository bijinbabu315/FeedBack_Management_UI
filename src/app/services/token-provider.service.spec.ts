import { TestBed } from '@angular/core/testing';

import { TokenProviderService } from './token-provider.service';

describe('TokenStorageService', () => {
  let service: TokenProviderService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(TokenProviderService);
    expect(service).toBeTruthy();
  });

  it('should call getToken()', () => {
    service.saveToken('abcd');
    const token = service.getToken();
    expect(token).toEqual('abcd');
  });

  it('should call saveUser()', () => {
    service.saveUser('biji');
    let user = service.getUser();
    expect(user).toEqual('biji');
    service.signOut();
    user = service.getUser();
    expect(user).toBeNull();
  });
});
