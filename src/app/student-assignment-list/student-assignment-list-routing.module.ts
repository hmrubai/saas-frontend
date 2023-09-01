import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAssignmentListComponent } from './student-assignment-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentAssignmentListComponent,
    data: {
      title: 'Student Course List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAssignmentListRoutingModule { }
