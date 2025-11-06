import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestIndex } from './gest-index';

describe('GestIndex', () => {
  let component: GestIndex;
  let fixture: ComponentFixture<GestIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
