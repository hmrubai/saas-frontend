import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorScheduleListComponent } from './mentor-schedule-list.component';

describe('MentorScheduleListComponent', () => {
  let component: MentorScheduleListComponent;
  let fixture: ComponentFixture<MentorScheduleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorScheduleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
