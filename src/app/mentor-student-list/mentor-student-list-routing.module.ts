import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorStudentListComponent } from './mentor-student-list.component';

const routes: Routes = [
  {
    path: '',
    component: MentorStudentListComponent,
    data: {
      title: 'Expert Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorStudentListRoutingModule { }
