import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICar } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  private _siteURL = 'http://localhost:5050'; // Adjust the URL to match your API endpoint

  constructor(private _http: HttpClient) { }

  getAllCars(): Observable<ICar[]> {
    return this._http.get<ICar[]>(`${this._siteURL}/cars`)
      .pipe(
        tap(data => console.log('All cars: ', data)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}

