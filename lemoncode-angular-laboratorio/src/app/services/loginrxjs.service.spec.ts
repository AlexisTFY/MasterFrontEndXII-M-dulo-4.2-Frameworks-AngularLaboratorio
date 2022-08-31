import { TestBed } from '@angular/core/testing';

import { LoginrxjsService } from './loginrxjs.service';

describe('LoginrxjsService', () => {
  let service: LoginrxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginrxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
