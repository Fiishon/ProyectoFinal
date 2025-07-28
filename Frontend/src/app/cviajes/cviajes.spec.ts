import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CViajes } from './cviajes';

describe('CViajes', () => {
  let component: CViajes;
  let fixture: ComponentFixture<CViajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CViajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CViajes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
