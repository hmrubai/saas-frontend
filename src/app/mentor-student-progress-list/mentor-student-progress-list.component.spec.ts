import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorStudentProgressListComponent } from './mentor-student-progress-list.component';

describe('MentorStudentProgressListComponent', () => {
  let component: MentorStudentProgressListComponent;
  let fixture: ComponentFixture<MentorStudentProgressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorStudentProgressListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorStudentProgressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
