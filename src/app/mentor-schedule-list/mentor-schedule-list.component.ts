import { Component, OnInit, TemplateRef, ViewChild   } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from '../../environments/environment';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
    selector: 'app-mentor-schedule-list',
    templateUrl: './mentor-schedule-list.component.html',
    styleUrls: ['./mentor-schedule-list.component.scss']
})
export class MentorScheduleListComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    classList: Array<any> = [];
    modalRef?: BsModalRef;
    is_loaded = false;
    is_loaded_student = false;
    user_id: any = '';
    assetURL = environment.imageURL;

    entryForm: FormGroup;
    updateForm: FormGroup;
    submitted = false;

    studentDetails: any = {};
    scheduleDetails: any = {};

    public user_role = null;
    public currentUser: any = {};

    schedule_id: any;

    mapping_id;
    constructor(
        private _service: CommonService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private modalService: BsModalService,
        private router: Router,
        public formBuilder: FormBuilder,
        private location: Location
    ) {
        if (this.authService.isAuthenticated()) {
            this.is_authenticated = true;
            this.currentUser = this.authService.currentUserDetails.value;
            this.user_role = this.currentUser.user_type;
            this.user_id = this.currentUser.id;
        }
        this.mapping_id = this.route.snapshot.paramMap.get("mapping_id");
    }

    ngOnInit(): void {
        this.getScheduleList()
        this.studentDetailsByID();

        this.entryForm = this.formBuilder.group({
            mapping_id: [this.mapping_id, [Validators.required]],
            schedule_date: [null, [Validators.required]],
        });

        this.updateForm = this.formBuilder.group({
            schedule_id: [null, [Validators.required]],
            schedule_date: [null, [Validators.required]],
        });
    }

    get f() {
        return this.entryForm.controls;
    }

    get uf() {
        return this.updateForm.controls;
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    openUpdateModal(item: any, template: TemplateRef<any>) {
        this.updateForm.controls['schedule_id'].setValue(item.id);
        this.updateForm.controls['schedule_date'].setValue(this.getDateFormatModal(item.schedule_datetime));
        this.modalRef = this.modalService.show(template);
    }

    deleteConfirmModal(item: any, template: TemplateRef<any>){
        this.schedule_id = item.id;
        this.modalRef = this.modalService.show(template);
    }

    endClassConfirmModal(item: any, template: TemplateRef<any>){
        this.schedule_id = item.id;
        this.modalRef = this.modalService.show(template);
    }

    startClassConfirmModal(item: any, template: TemplateRef<any>){
        this.schedule_id = item.id;
        this.scheduleDetails = item;
        this.modalRef = this.modalService.show(template);
    }

    getScheduleList() {
        this.blockUI.start('Loading...');
        this._service.get('website/mentor-schedule-list/' + this.mapping_id).subscribe(res => {
            this.classList = res.data;
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.toastr.warning(err.message, 'Attention!', { timeOut: 2000 });
            this.blockUI.stop();
        });
    }

    studentDetailsByID(){
        this.blockUI.start('Loading...');
        this._service.get('website/student-details-by-mapping-id/' + this.mapping_id).subscribe(res => {
            this.studentDetails = res.data;
            this.is_loaded_student = true;
            this.blockUI.stop();
        }, err => {
            this.toastr.warning(err.message, 'Attention!', { timeOut: 2000 });
            this.blockUI.stop();
        });
    }

    formSubmit(){
        this.submitted = true;
        if (this.entryForm.invalid) {
            return;
        }
        this.blockUI.start('Loading...');

        this._service.post('website/add-new-schedule', this.entryForm.value).subscribe(res => {
            this.toastr.success(res.message, 'Success!', { timeOut: 2000 });
            this.getScheduleList();
            this.hideModal();
            this.blockUI.stop();
        }, err => {
            this.toastr.warning(err.message, 'Attention!', { timeOut: 2000 });
            this.blockUI.stop();
        });
    }

    formUpdateSubmit()
    {
        this.submitted = true;
        if (this.updateForm.invalid) {
            return;
        }

        this.blockUI.start('Loading...');

        this._service.post('website/update-schedule', this.updateForm.value).subscribe(res => {
            this.toastr.success(res.message, 'Success!', { timeOut: 2000 });
            this.getScheduleList();
            this.hideModal();
            this.blockUI.stop();
        }, err => {
            this.toastr.warning(err.message, 'Attention!', { timeOut: 2000 });
            this.blockUI.stop();
        });
    }

    deleteSubmit(){
        this.blockUI.start('Deleting...');
        let param = {
            schedule_id: this.schedule_id
        }

        this._service.post('website/delete-schedule', param).subscribe(res => {
            this.toastr.success(res.message, 'Success!', { timeOut: 2000 });
            this.getScheduleList();
            this.schedule_id = null;
            this.hideModal();
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
            this.toastr.warning(err.message, 'Attention!', { timeOut: 2000 });
        });
    }

    startClassSubmit(){
        this.blockUI.start('Starting...');
        console.log(this.scheduleDetails);
        let param = {
            schedule_id: this.schedule_id
        }

        if(this.scheduleDetails.has_started && this.scheduleDetails.join_link){
            window.open(
                this.scheduleDetails.join_link, '_blank'
            );
            this.blockUI.stop();
            return;
        }

        this._service.post('website/start-live-class', param).subscribe(res => {
            this.toastr.success(res.message, 'Success!', { timeOut: 2000 });

            window.open(
                this.scheduleDetails.join_link, '_blank'
            );

            this.hideModal();
            this.getScheduleList();
            this.schedule_id = null;
            this.blockUI.stop();
        }, err => {
            this.toastr.warning(err.message, 'Attention!', { timeOut: 2000 });
            this.blockUI.stop();
        });
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
            this.toastr.warning(err.message, 'Attention!', { timeOut: 2000 });
            this.blockUI.stop();
        });
    }

    confirmDelete(): void {
        this.modalRef?.hide();
        this.deleteSubmit();
    }
    
    declineDelete(): void {
        this.modalRef?.hide();
        this.schedule_id = null;
    }

    confirmEndClass(): void {
        this.modalRef?.hide();
        this.endClassSubmit();
    }
    
    declineEndClass(): void {
        this.modalRef?.hide();
        this.schedule_id = null;
    }

    confirmStartClass(): void {
        this.modalRef?.hide();
        this.startClassSubmit();
    }
    
    declineStartClass(): void {
        this.modalRef?.hide();
        this.schedule_id = null;
    }

    hideModal(){
        this.submitted = false;
        this.modalRef?.hide();
        this.entryForm.reset();
        this.updateForm.reset();
        this.schedule_id = null;
        this.scheduleDetails = {};
    }

    getDateFormatModal(value: Date) {
        return moment(value).format('yyyy-MM-DDTHH:mm:ss');
    }

    backToPage() {
        this.location.back();
    }
}
