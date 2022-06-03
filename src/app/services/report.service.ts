import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../shared/models/usuario';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  url = 'http://127.0.0.1:5000/report';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public getReport(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  public getReportById(id: number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  public postReport(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Tratamento de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage.toString);
  }

}

