import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MentorUpdateLinkRoutingModule } from './mentor-update-link-routing.module';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MentorUpdateLinkRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule,
    ToastrModule
  ]
})
export class MentorUpdateLinkModule { }
