import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/Services/http.service';
import Student from 'src/app/Models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const studentId = params.get('id');
      if (studentId) {
        this.httpService.getStudentById(studentId).subscribe((res) => {
          this.student = res;
          console.log(res);
        });
      }
    });
  }
}
