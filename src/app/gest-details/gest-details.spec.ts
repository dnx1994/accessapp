import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestDetails } from './gest-details';

describe('GestDetails', () => {
  let component: GestDetails;
  let fixture: ComponentFixture<GestDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
