import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barra1 } from './barra1';

describe('Barra1', () => {
  let component: Barra1;
  let fixture: ComponentFixture<Barra1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barra1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barra1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
