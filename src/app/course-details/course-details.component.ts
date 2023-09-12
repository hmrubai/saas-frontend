import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    courseList: Array<any> = [];
    is_loaded = false;
    user_id: any = '';
    modalRef?: BsModalRef;

    video_url: any;
    modal_title = 'Video';
    modalConfig: any = { class: 'gray modal-xl', backdrop: 'static' };

    courseDetails: any = {};

    public user_role = null;
    public currentUser: any = {};

    course_id;
    constructor(
        private _service: CommonService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: BsModalService,
        private _sanitizer: DomSanitizer
    ) {
        if (this.authService.isAuthenticated()) {
            this.is_authenticated = true;
            this.currentUser = this.authService.currentUserDetails.value;
            this.user_role = this.currentUser.user_type;
            this.user_id = this.currentUser.id;
        }
        this.course_id = this.route.snapshot.paramMap.get("course_id");
    }

    ngOnInit(): void {
        this.getCourseDetails();
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    safeURL(videoURL: string){
        return this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
     }

    showVideo(item: any, template: TemplateRef<any>){

        if(!this.is_authenticated){
            this.toastr.warning("Please login first!", 'Attention!', { timeOut: 2000 });
            return;
        }

        if(!this.courseDetails.is_purchased){
            this.toastr.warning("Please purchase first!", 'Attention!', { timeOut: 2000 });
            return;
        }

        console.log(item);
        this.modal_title = item.title;
        this.video_url = item.video_youtube_url;
        this.openModal(template);
    }

    getCourseDetails() {
        this.blockUI.start('Loading...');
        this.courseDetails = {};
        this.user_id = this.user_id ? this.user_id : 0;
        this._service.get('website/course-details-by-user/' + this.user_id + '/' + this.course_id).subscribe(res => {
            this.courseDetails = res.data;
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    PayNow(){
        console.log("Pay")
        this.blockUI.start('Loading...');
        let param = {
            course_id: this.course_id
        };

        this._service.post('website/purchase-course', param).subscribe(res => {
            this.toastr.success(res.data.message, 'Success!', { timeOut: 2000 });
            this.getCourseDetails();
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

}
