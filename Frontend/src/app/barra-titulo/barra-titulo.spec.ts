import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTitulo } from './barra-titulo';

describe('BarraTitulo', () => {
  let component: BarraTitulo;
  let fixture: ComponentFixture<BarraTitulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraTitulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraTitulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
