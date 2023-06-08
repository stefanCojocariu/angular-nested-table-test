import { TestBed } from '@angular/core/testing';

import { PersonRepository } from './person.repository';

describe('PersonRepository', () => {
  let repository: PersonRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(PersonRepository);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });
});
