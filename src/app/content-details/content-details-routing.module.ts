import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailsComponent } from './content-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContentDetailsComponent,
    data: {
      title: 'Content Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentDetailsRoutingModule { }
