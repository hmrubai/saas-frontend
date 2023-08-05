import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorStudentListComponent } from './mentor-student-list.component';

describe('MentorStudentListComponent', () => {
  let component: MentorStudentListComponent;
  let fixture: ComponentFixture<MentorStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorStudentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
