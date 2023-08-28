import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPurchaseCourseListComponent } from './student-purchase-course-list.component';

describe('StudentPurchaseCourseListComponent', () => {
  let component: StudentPurchaseCourseListComponent;
  let fixture: ComponentFixture<StudentPurchaseCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPurchaseCourseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPurchaseCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
