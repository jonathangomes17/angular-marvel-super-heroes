import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterResultModel } from '../models/character-result.model';
import { CharacterModel } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  public getCharacters(nameStartsWith: string): Observable<CharacterResultModel> {
    return this.http
      .get('characters', { params: { nameStartsWith } })
      .pipe(map((response: any) => new CharacterResultModel(response?.data)));
  }

  public getCharactersById(characterId: number): Observable<CharacterModel> {
    return this.http
      .get(`characters/${characterId}`)
      .pipe(map((response: any) => new CharacterModel(response?.data?.results?.[0])));
  }
}
