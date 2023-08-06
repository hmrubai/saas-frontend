import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorUpdateLinkComponent } from './mentor-update-link.component';

describe('MentorUpdateLinkComponent', () => {
  let component: MentorUpdateLinkComponent;
  let fixture: ComponentFixture<MentorUpdateLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorUpdateLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorUpdateLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
