import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CorsoDto } from '../model/CorsoDto';

@Injectable({
  providedIn: 'root'
})

export class CorsoService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured: ', error.error); //errore del client o della rete
    }
    else {
      console.error('Backend returned code ${error.status}, body was: ', error.error);
    }
    return throwError(() => new Error('Something bad happened'));
  }

  getAll(): Observable<CorsoDto[]> {
    return this.http.get<CorsoDto[]>("http://localhost:8080/api/corso/get/all").pipe(retry(3), catchError(this.handleError));
  }

  getCorsoById(id: number): Observable<CorsoDto> {
    return this.http.get<CorsoDto>(`http://localhost:8080/api/corso/get/${id}`).pipe(retry(3), catchError(this.handleError));
  }

  getCorsoByName(name: string): Observable<CorsoDto> {
    return this.http.get<CorsoDto>(
      `http://localhost:8080/api/corso/get/name/${name}`)
      .pipe(retry(3), catchError(this.handleError));
  }
}
