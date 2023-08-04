import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorDashboardComponent } from './mentor-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MentorDashboardComponent,
    data: {
      title: 'Expert Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorDashboardRoutingModule { }
