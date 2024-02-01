import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/Services/student.service';
import StudentPostData from 'src/app/Models/StudentPostData';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent {
  studentForm!: FormGroup;
  studentId: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.studentId = params.get('id');
    });

    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', Validators.required],
      mark1: ['', Validators.required],
      mark2: ['', Validators.required],
      mark3: ['', Validators.required],
      mark4: ['', Validators.required],
      mark5: ['', Validators.required],
      total: 0,
      average: 0,
    });
  }

  calculateTotalAndAverage() {
    const mark1 = this.studentForm.get('mark1')?.value || 0;
    const mark2 = this.studentForm.get('mark2')?.value || 0;
    const mark3 = this.studentForm.get('mark3')?.value || 0;
    const mark4 = this.studentForm.get('mark4')?.value || 0;
    const mark5 = this.studentForm.get('mark5')?.value || 0;

    const total = mark1 + mark2 + mark3 + mark4 + mark5;
    const average = total / 5;

    this.studentForm.patchValue({ total, average });
  }

  onSubmit() {
    this.calculateTotalAndAverage();
    this.studentService
      .editStudentDetails(this.studentForm.value, this.studentId)
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
        complete: () => {
          alert('Details edited successfully');
          this.router.navigateByUrl('/');
        },
      });
  }
}
