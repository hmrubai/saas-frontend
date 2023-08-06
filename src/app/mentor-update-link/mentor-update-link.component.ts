import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-mentor-update-link',
    templateUrl: './mentor-update-link.component.html',
    styleUrls: ['./mentor-update-link.component.scss']
})
export class MentorUpdateLinkComponent implements OnInit {
    entryForm: FormGroup;
    submitted = false;

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    courseList: Array<any> = [];
    is_loaded = false;
    user_id: any = '';

    liveLink: any = {};

    courseDetails: any = {};

    public user_role = null;
    public currentUser: any = {};

    //course_id;
    constructor(
        public formBuilder: FormBuilder,
        private _service: CommonService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        if (this.authService.isAuthenticated()) {
            this.is_authenticated = true;
            this.currentUser = this.authService.currentUserDetails.value;
            this.user_role = this.currentUser.user_type;
            this.user_id = this.currentUser.id;
        }
    }

    ngOnInit(): void {
        this.entryForm = this.formBuilder.group({
            link: [null, [Validators.required]]
        });

        this.getLinkDetails();
    }
    
    get f() {
        return this.entryForm.controls;
    }

    onFormSubmit(){
        this.submitted = true;
        if (this.entryForm.invalid) {
            return;
        }
        this.blockUI.start('Loading...');

        let params = {
            "live_link": this.entryForm.value.link
        }

        this._service.post('website/update-link', params).subscribe(
            data => {
                this.blockUI.stop();
                this.toastr.success(data.message, 'Success!', { timeOut: 2000 });
                this.getLinkDetails();
            },
            err => {
                this.blockUI.stop();
                this.toastr.error(err.message || err, 'Error!', { timeOut: 2000 });
            }
        );
    }

    getLinkDetails() {
        this.blockUI.start('Loading...');
        this._service.get('website/mentor-live-link').subscribe(res => {
            this.liveLink = res.data;

            if(this.liveLink){
                this.entryForm.controls['link'].setValue(res.data.live_link);
            }
            
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

}
