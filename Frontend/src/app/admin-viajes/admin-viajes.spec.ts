import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViajes } from './admin-viajes';

describe('AdminViajes', () => {
  let component: AdminViajes;
  let fixture: ComponentFixture<AdminViajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViajes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
