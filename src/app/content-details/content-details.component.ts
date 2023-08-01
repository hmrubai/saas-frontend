import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-content-details',
    templateUrl: './content-details.component.html',
    styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

    content_id;
    constructor(
        private route: ActivatedRoute,
    ) {
        this.content_id = this.route.snapshot.paramMap.get("content_id");
        console.log(this.content_id)
    }

    ngOnInit(): void {
    }

}
