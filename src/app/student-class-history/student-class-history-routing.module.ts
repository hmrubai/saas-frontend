import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentClassHistoryComponent } from './student-class-history.component';

const routes: Routes = [
  {
    path: '',
    component: StudentClassHistoryComponent,
    data: {
      title: 'Student Class History'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentClassHistoryRoutingModule { }
