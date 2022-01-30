import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterResultModel } from '../models/character-result.model';
import { CharacterModel } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public $characterData = new BehaviorSubject<CharacterResultModel>(new CharacterResultModel({}));

  public $characterViewingData = new BehaviorSubject<CharacterModel>(new CharacterModel({}));

  public getCharacterResult = (): Observable<CharacterResultModel> => this.$characterData.asObservable();

  public setCharacterResult(characterResult: CharacterResultModel): void {
    this.$characterData.next(characterResult);
  }

  public getCharacterViewing = (): CharacterModel => this.$characterViewingData.value;

  public setCharacterViewing(character: CharacterModel): void {
    this.$characterViewingData.next(character);
  }

  // TODO: Add new search result to display more characters
  // TODO: As long as the character exists in memory do not search in marvel
}
