import { ISerialize } from 'src/app/interfaces/serialize.interface'
import { CharacterModel } from './character.model'

export class CharacterResultModel implements ISerialize {
  #total: number;
  #count: number;
  #offset: number;
  #characters: CharacterModel[] = [];

  constructor({
    total = 0,
    count = 0,
    offset = 0,
    results = [],
  }) {
    this.#total = total;
    this.#count = count;
    this.#offset = offset;
    this.#characters = results?.map(result => new CharacterModel(result));
  }

  get total(): number {
    return this.#total;
  }

  get count(): number {
    return this.#count;
  }

  get offset(): number {
    return this.#offset;
  }

  get characters(): CharacterModel[] {
    return this.#characters;
  }

  serialize(): object {
    return {};
  }
}
