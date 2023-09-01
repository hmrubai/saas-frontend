import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPaymentListComponent } from './student-payment-list.component';

describe('StudentPaymentListComponent', () => {
  let component: StudentPaymentListComponent;
  let fixture: ComponentFixture<StudentPaymentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPaymentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
