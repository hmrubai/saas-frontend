import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from '../../environments/environment';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Location } from '@angular/common';

@Component({
    selector: 'app-mentor-ongoing-class-list',
    templateUrl: './mentor-ongoing-class-list.component.html',
    styleUrls: ['./mentor-ongoing-class-list.component.scss']
})
export class MentorOngoingClassListComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    classList: Array<any> = [];
    modalRef?: BsModalRef;
    is_loaded = false;
    user_id: any = '';

    courseDetails: any = {};

    schedule_id: any;

    public user_role = null;
    public currentUser: any = {};

    //mapping_id;
    constructor(
        private _service: CommonService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: BsModalService,
        private location: Location
    ) {
        if (this.authService.isAuthenticated()) {
            this.is_authenticated = true;
            this.currentUser = this.authService.currentUserDetails.value;
            this.user_role = this.currentUser.user_type;
            this.user_id = this.currentUser.id;
        }
    }

    ngOnInit(): void {
        this.getScheduleList()
    }

    getScheduleList() {
        this.blockUI.start('Loading...');
        this._service.get('website/mentor-ongoing-class-list').subscribe(res => {
            this.classList = res.data;
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    endClassConfirmModal(item: any, template: TemplateRef<any>){
        this.schedule_id = item.id;
        this.modalRef = this.modalService.show(template);
    }

    endClassSubmit(){
        this.blockUI.start('Ending...');
        let param = {
            schedule_id: this.schedule_id
        }

        this._service.post('website/end-live-class', param).subscribe(res => {
            this.toastr.success(res.message, 'Success!', { timeOut: 2000 });
            this.getScheduleList();
            this.schedule_id = null;
            this.hideModal();
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });

        this.blockUI.stop();
    }

    confirmEndClass(): void {
        this.modalRef?.hide();
        this.endClassSubmit();
    }
    
    declineEndClass(): void {
        this.modalRef?.hide();
        this.schedule_id = null;
    }

    hideModal(){
        this.modalRef?.hide();
        this.schedule_id = null;
    }

}
