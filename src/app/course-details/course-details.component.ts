import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course_id;
  constructor(
    private route: ActivatedRoute,
    ) { 
      this.course_id = this.route.snapshot.paramMap.get("course_id");
      console.log(this.course_id)
    }

  ngOnInit(): void {
  }

}
