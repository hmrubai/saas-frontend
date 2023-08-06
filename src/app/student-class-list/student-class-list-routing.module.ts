import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentClassListComponent } from './student-class-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentClassListComponent,
    data: {
      title: 'Student Class List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentClassListRoutingModule { }
