import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/Services/http.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent {
  studentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {}

  ngOnInit() {
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
    // console.log(this.studentForm.value);

    if (this.studentForm.valid) {
      this.httpService.addStudentData(this.studentForm.value).subscribe(res => {
        console.log(res);
        this.studentForm.reset();
        alert("Data added successfully!")
      });
    } else {
      this.studentForm.markAllAsTouched();
    }
  }
}
