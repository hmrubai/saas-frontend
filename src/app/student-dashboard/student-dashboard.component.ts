import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  //course_id;
  constructor(
    private route: ActivatedRoute,
    ) { 
      // this.course_id = this.route.snapshot.paramMap.get("course_id");
      // console.log(this.course_id)
    }

  ngOnInit(): void {
  }

}
