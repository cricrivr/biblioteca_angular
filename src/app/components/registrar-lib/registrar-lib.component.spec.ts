import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLibComponent } from './registrar-lib.component';

describe('RegistrarLibComponent', () => {
  let component: RegistrarLibComponent;
  let fixture: ComponentFixture<RegistrarLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
