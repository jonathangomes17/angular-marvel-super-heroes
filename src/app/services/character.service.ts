import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterResultModel } from '../models/character-result.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public $characterData = new BehaviorSubject<CharacterResultModel>(new CharacterResultModel({}));

  // constructor(private localStorageLib: LocalStorageLib) { }

  public getCharacterResult = (): Observable<CharacterResultModel> => this.$characterData.asObservable();

  public setCharacterResult(characterResult: CharacterResultModel): void {
    this.$characterData.next(characterResult);
  }
}
