import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorStudentProgressListComponent } from './mentor-student-progress-list.component';

const routes: Routes = [
  {
    path: '',
    component: MentorStudentProgressListComponent,
    data: {
      title: 'Expert Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorStudentProgressListRoutingModule { }
