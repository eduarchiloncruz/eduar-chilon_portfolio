import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { Email, EmailForm } from '../../core/models/email.model';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  recipient: string = environments.email;
  url: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  sendEmail(emailValue: EmailForm): Observable<any> {
    const email: Email = {
      recipient: this.recipient,
      subject: emailValue.subject,
      content: `<h2>Name: ${emailValue.name}</h2>
      <h2>Email: ${emailValue.email}</h2>
      <p>${emailValue.message}</p>`,
    };

    return this.http.post<any>(`${this.url}/send-email`, email).pipe(
      tap((res: any) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(error?.error);
    } else {
      console.error(error.status, error?.error);
    }

    return throwError(() => new Error('Send email again.'));
  }
}
