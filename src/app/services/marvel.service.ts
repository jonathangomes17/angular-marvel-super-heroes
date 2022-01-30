import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterResultModel } from '../models/character-result.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  public getCharacters(nameStartsWith: string): Observable<CharacterResultModel> {
    nameStartsWith = nameStartsWith.replace(' ', '-').trim();

    return this.http
      .get('characters', { params: { nameStartsWith } })
      .pipe(map((response: any) => new CharacterResultModel(response?.data)));
  }

  public getCharactersById(characterId: string): Observable<any[]> {
    return this.http
      .get(`characters/${characterId}`)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}
