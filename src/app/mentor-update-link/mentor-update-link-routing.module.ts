import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorUpdateLinkComponent } from './mentor-update-link.component';

const routes: Routes = [
  {
    path: '',
    component: MentorUpdateLinkComponent,
    data: {
      title: 'Update Link'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorUpdateLinkRoutingModule { }
