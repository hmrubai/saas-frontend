import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorOngoingClassListComponent } from './mentor-ongoing-class-list.component';

const routes: Routes = [
  {
    path: '',
    component: MentorOngoingClassListComponent,
    data: {
      title: 'Expert Ongoing Class List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorOngoingClassListRoutingModule { }
