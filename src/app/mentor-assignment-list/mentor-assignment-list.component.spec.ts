import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAssignmentListComponent } from './mentor-assignment-list.component';

describe('MentorAssignmentListComponent', () => {
  let component: MentorAssignmentListComponent;
  let fixture: ComponentFixture<MentorAssignmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorAssignmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorAssignmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
