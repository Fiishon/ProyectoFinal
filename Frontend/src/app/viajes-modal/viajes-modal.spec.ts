import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesModal } from './viajes-modal';

describe('ViajesModal', () => {
  let component: ViajesModal;
  let fixture: ComponentFixture<ViajesModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViajesModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajesModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
