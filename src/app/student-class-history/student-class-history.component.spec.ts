import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassHistoryComponent } from './student-class-history.component';

describe('StudentClassHistoryComponent', () => {
  let component: StudentClassHistoryComponent;
  let fixture: ComponentFixture<StudentClassHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentClassHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentClassHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
