import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorAssignmentListComponent } from './mentor-assignment-list.component';

const routes: Routes = [
  {
    path: '',
    component: MentorAssignmentListComponent,
    data: {
      title: 'Mentor Assignment List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorAssignmentListRoutingModule { }
