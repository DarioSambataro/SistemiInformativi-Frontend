import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, count, Observable, retry, throwError } from 'rxjs';
import { UtenteDto } from '../model/UtenteDto';
import { LoginRequest } from '../model/loginrequest';
import { LoginResponse } from '../model/loginreponse';
import { SignupRequest } from '../model/signuprequest';

@Injectable({
  providedIn: 'root'
})
export class UtenteServiceService {

  constructor(private http: HttpClient) { 
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured: ', error.error); //errore del client o della rete
    }
    else {
      console.error('Backend returned code ${error.status}, body was: ', error.error);
    }
    return throwError(() => new Error('Something bad happened'));
  }


  getAll(): Observable<UtenteDto[]> {
    return this.http.get<UtenteDto[]>("http://localhost:8080/api/utente/get/all").pipe(retry(3), catchError(this.handleError));
  }

  getUtenteByEmail(email: string): Observable<UtenteDto> {
    return this.http.get<UtenteDto>(`http://localhost:8080/api/utente/get/${email}`).pipe(retry(3), catchError(this.handleError));
  }

  deleteUtenteByEmail(email: string) {
    return this.http.delete(`http://localhost:8080/api/utente/delete/${email}`).pipe(retry(3), catchError(this.handleError));
  }

  addCourse(id_u: number, id_c: number) {
    const body = { title: 'Angular PUT Request Example' };
    return this.http.put(`http://localhost:8080/api/utente/${id_u}/corso/${id_c}/subscribe`, body).pipe(retry(3), catchError(this.handleError));
  }

  login(loginrequest: LoginRequest): Observable<LoginRequest> {
    //const body = { "email": loginrequest.email, "password": loginrequest.password };
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json'); //
    return this.http.post<LoginRequest>("http://localhost:8080/api/utente/login", JSON.stringify(loginrequest), { headers: headers}).pipe(
      retry(3), 
      catchError(this.handleError));
  }

  signup(signuprequest: SignupRequest): Observable<SignupRequest> {
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<SignupRequest>("http://localhost:8080/api/utente/reg", JSON.stringify(signuprequest), { headers: headers}).pipe(
      retry(3), 
      catchError(this.handleError));
  }
}
