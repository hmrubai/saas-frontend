import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContentListComponent,
    data: {
      title: 'Content List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentListRoutingModule { }
