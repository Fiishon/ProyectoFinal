import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNosotros } from './cnosotros';

describe('CNosotros', () => {
  let component: CNosotros;
  let fixture: ComponentFixture<CNosotros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CNosotros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CNosotros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
