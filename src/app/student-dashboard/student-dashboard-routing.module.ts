import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
    data: {
      title: 'Student Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDashboardRoutingModule { }
