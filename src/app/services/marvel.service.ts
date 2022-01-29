import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<any[]> {
    return this.http
      .get('characters')
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public getCharactersById(characterId: string): Observable<any[]> {
    return this.http
      .get(`characters/${characterId}`)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}
