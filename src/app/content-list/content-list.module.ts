import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';

import { ContentListRoutingModule } from './content-list-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule,
    ToastrModule
  ]
})
export class ContentListModule { }
