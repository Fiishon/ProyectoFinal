import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRegistroModal } from './cregistro-modal';

describe('CRegistroModal', () => {
  let component: CRegistroModal;
  let fixture: ComponentFixture<CRegistroModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRegistroModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRegistroModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
