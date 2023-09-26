import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-content-subject-details',
    templateUrl: './content-subject-details.component.html',
    styleUrls: ['./content-subject-details.component.scss']
})
export class ContentSubjectDetailsComponent implements OnInit {

    content_id;
    constructor(
        private route: ActivatedRoute,
    ) {
        this.content_id = this.route.snapshot.paramMap.get("content_subject_id");
        console.log(this.content_id)
    }

    ngOnInit(): void {
    }

}
