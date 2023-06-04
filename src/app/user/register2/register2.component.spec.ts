import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent2 } from './register2.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent2;
  let fixture: ComponentFixture<RegisterComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
