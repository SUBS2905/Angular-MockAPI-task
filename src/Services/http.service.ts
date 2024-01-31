import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Student from 'src/app/Models/student';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiEndpoint =
    'https://65aab9eb081bd82e1d97a81b.mockapi.io/student-details';

  constructor(private http: HttpClient) {}

  getData(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiEndpoint);
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiEndpoint}/${id}`);
  }
}
