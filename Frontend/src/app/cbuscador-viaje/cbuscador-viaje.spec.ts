import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBuscadorViaje } from './cbuscador-viaje';

describe('CBuscadorViaje', () => {
  let component: CBuscadorViaje;
  let fixture: ComponentFixture<CBuscadorViaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CBuscadorViaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CBuscadorViaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
