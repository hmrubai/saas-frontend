import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from '../../environments/environment';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Location } from '@angular/common';

@Component({
    selector: 'app-student-exam-result',
    templateUrl: './student-exam-result.component.html',
    styleUrls: ['./student-exam-result.component.scss']
})
export class StudentExamResultComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    courseList: Array<any> = [];
    is_loaded = false;
    user_id: any = '';

    resultDetails: any = {};

    public user_role = null;
    public currentUser: any = {};
    result_id;

    constructor(
        private _service: CommonService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) {
        if (this.authService.isAuthenticated()) {
            this.is_authenticated = true;
            this.currentUser = this.authService.currentUserDetails.value;
            this.user_role = this.currentUser.user_type;
            this.user_id = this.currentUser.id;
        }

        this.result_id = this.route.snapshot.paramMap.get("result_id");
    }

    ngOnInit(): void {
        this.getResultDetails();
    }

    getResultDetails() {
        this.blockUI.start('Loading...');
        this._service.get('website/student-quiz-result-details-by-id/' + this.result_id).subscribe(res => {
            this.resultDetails = res.data;
            console.log(this.resultDetails);
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    backToPage() {
        this.location.back();
    }

}
