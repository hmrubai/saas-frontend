import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorScheduleListComponent } from './mentor-schedule-list.component';

const routes: Routes = [
  {
    path: '',
    component: MentorScheduleListComponent,
    data: {
      title: 'Expert Schedule List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorScheduleListRoutingModule { }
