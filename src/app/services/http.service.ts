import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  errorLogin = new Subject<boolean>();
  // port = environment.port;

  constructor(private httpClient: HttpClient) {}

  public get(path: string): Observable<any> {
    return this.httpClient
      .get(this.getBaseURL() + path)
      .pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .put(this.getBaseURL() + path, body)
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(this.getBaseURL() + path, body)
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.httpClient
      .delete(this.getBaseURL() + path)
      .pipe(catchError(this.formatErrors))
      .pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: HttpErrorResponse): Observable<any> {
    // Imprime el error en la consola para depuración
    console.log(error);

    // Devuelve el error para que pueda ser manejado por otras partes de la aplicación
    return throwError(error.error);
  }

  getBaseURL() {
    let apiPath = '/api/';

    // Para trabajar local
    let protocol = 'http:';
    let hostname = 'localhost';
    let port = ':3000';

    let url = protocol + '//' + hostname + port + apiPath;
    return url;
  }
}
