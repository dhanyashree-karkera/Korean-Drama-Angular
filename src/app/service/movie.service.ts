import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private api = 'https://www.omdbapi.com/?s=batman&page=2&apiKey=9c13a4dc';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.api);
  }
}
