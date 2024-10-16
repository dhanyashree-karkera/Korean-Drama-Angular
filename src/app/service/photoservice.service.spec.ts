import { TestBed } from '@angular/core/testing';
import { PhotoserviceService } from '../service/photoservice.service';

describe('PhotoserviceService', () => {
  let service: PhotoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
