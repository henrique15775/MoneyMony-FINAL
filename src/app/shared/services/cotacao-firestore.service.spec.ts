import { TestBed } from '@angular/core/testing';

import { CotacaoFirestoreService } from './cotacao-firestore.service';

describe('CotacaoFirestoreService', () => {
  let service: CotacaoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotacaoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
