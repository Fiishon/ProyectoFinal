import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarBoleto } from './comprar-boleto';

describe('ComprarBoleto', () => {
  let component: ComprarBoleto;
  let fixture: ComponentFixture<ComprarBoleto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprarBoleto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarBoleto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
