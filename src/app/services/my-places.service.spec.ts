import { TestBed } from '@angular/core/testing';

import { MyPlacesService } from './my-places.service';

describe('MyPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPlacesService = TestBed.get(MyPlacesService);
    expect(service).toBeTruthy();
  });
});
