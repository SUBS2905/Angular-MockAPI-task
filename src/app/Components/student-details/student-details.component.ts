import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/Services/student.service';
import Student from 'src/app/Models/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const studentId = params.get('id');
      if (studentId) {
        this.studentService.getStudentById(studentId).subscribe((res) => {
          this.student = res;
        });
      }
    });
  }
}
