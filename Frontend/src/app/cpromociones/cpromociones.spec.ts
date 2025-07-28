import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPromociones } from './cpromociones';

describe('CPromociones', () => {
  let component: CPromociones;
  let fixture: ComponentFixture<CPromociones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CPromociones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPromociones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
