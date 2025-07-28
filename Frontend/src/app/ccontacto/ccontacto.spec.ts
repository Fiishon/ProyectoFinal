import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CContacto } from './ccontacto';

describe('CContacto', () => {
  let component: CContacto;
  let fixture: ComponentFixture<CContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CContacto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CContacto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
