import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from '../../environments/environment';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-mentor-completed-class-list',
    templateUrl: './mentor-completed-class-list.component.html',
    styleUrls: ['./mentor-completed-class-list.component.scss']
})
export class MentorCompletedClassListComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    classList: Array<any> = [];
    is_loaded = false;
    user_id: any = '';
    total_time: "00:00:00";

    start_date = '';
    end_date = '';
    range = null;
    courseDetails: any = {};

    assetURL = environment.imageURL;

    public user_role = null;
    public currentUser: any = {};

    constructor(
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
        //this.mapping_id = this.route.snapshot.paramMap.get("mapping_id");
        // console.log(this.course_id)
    }

    ngOnInit(): void {
        this.getCourseDetails()
    }

    getCourseDetails() {
        this.blockUI.start('Loading...');
        this._service.get('website/mentor-completed-class-list').subscribe(res => {
            this.classList = res.data.list;
            this.total_time = res.data.total_time;
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    changeDate(){
        console.log(this.start_date)
        console.log(this.end_date)
        if(this.start_date && this,this.end_date){
            let param = {
                start_date: this.start_date,
                end_date: this.end_date,
            }

            this.blockUI.start('Loading...');
            this._service.get('website/mentor-completed-class-list', param).subscribe(res => {
                this.classList = res.data.list;
                this.total_time = res.data.total_time;
                this.is_loaded = true;
                this.blockUI.stop();
            }, err => {
                this.blockUI.stop();
            });
        }
    }

}
