import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterResultModel } from '../models/character-result.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public $characterData = new BehaviorSubject<CharacterResultModel>(new CharacterResultModel({}));

  // constructor(private localStorageLib: LocalStorageLib) { }

  public getCharacterResult = (): CharacterResultModel => this.$characterData?.value;

  public setCharacterResult(characterResult: CharacterResultModel): void {
    this.$characterData.next(characterResult);
  }
}
