import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Cookie } from 'ng2-cookies';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    public settings: any = {};
    banner_image = 'assets/images/saas-banner.jpeg';

    constructor() {
        if (Cookie.check('.BBSAASLMS.SiteSettings'))
            this.settings = JSON.parse(Cookie.get('.BBSAASLMS.SiteSettings'));
    }

    ngOnInit(): void {
        if (this.settings.banner) {
            this.banner_image = environment.imageURL + this.settings.banner
        }
    }

}
