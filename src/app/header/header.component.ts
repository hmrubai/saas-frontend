import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../_services/common.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


    menuList: Array<any> = [];
    is_menu_loaded = false;

    constructor(
        private _service: CommonService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        
        this.getMenuList();
    }


    getMenuList() {
        this._service.get('website/menu-list').subscribe(res => {
            console.log(res);
            this.menuList = res.data;
            this.is_menu_loaded = true;
            //this.blockUI.stop();
        }, err => {
            //this.blockUI.stop();
        }
        );
    }


    GotoPage(type:any, item: any){
        console.log(type)
        console.log(item)
        if(item.is_course){
            this.router.navigate(['/course-list']);
        }
    }

    gotoSubPage(type:any, item: any, sub_item:any){

        if(item.is_course){
            this.router.navigate(['/course-details/', sub_item.sub_menu_id ]);
        }

        console.log(type)
        console.log(item)
        console.log(sub_item)
    }

    isDropdownOpen = false;
    isDropdown2Open = false;
    isDropdown3Open = false;
    isDropdown4Open = false;
    isDropdown5Open = false;
    isDropdown6Open = false;
    isDropdown7Open = false;
    isDropdown8Open = false;
    isDropdownLoginOpen = false;
    
    showDropdown(): void {
        this.isDropdownOpen = true;
    }

    hideDropdown(): void {
        this.isDropdownOpen = false;
    }

    showDropdown2(): void {
        this.isDropdown2Open = true;
    }

    hideDropdown2(): void {
        this.isDropdown2Open = false;
    }

    showDropdown3(): void {
        this.isDropdown3Open = true;
    }

    hideDropdown3(): void {
        this.isDropdown3Open = false;
    }

    showDropdown4(): void {
        this.isDropdown4Open = true;
    }

    hideDropdown4(): void {
        this.isDropdown4Open = false;
    }

    showDropdown5(): void {
        this.isDropdown5Open = true;
    }

    hideDropdown5(): void {
        this.isDropdown5Open = false;
    }

    showDropdown6(): void {
        this.isDropdown6Open = true;
    }

    hideDropdown6(): void {
        this.isDropdown6Open = false;
    }

    showDropdownLogin(): void {
        this.isDropdownLoginOpen = true;
    }

    hideDropdownLogin(): void {
        this.isDropdownLoginOpen = false;
    }
}
