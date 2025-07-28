import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGaleria } from './cgaleria';

describe('CGaleria', () => {
  let component: CGaleria;
  let fixture: ComponentFixture<CGaleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CGaleria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CGaleria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
