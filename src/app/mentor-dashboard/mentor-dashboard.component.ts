import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.scss']
})
export class MentorDashboardComponent implements OnInit {

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
