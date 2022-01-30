import { ISerialize } from 'src/app/interfaces/serialize.interface';

export class CharacterCoverModel implements ISerialize {
  #path: string;
  #extension: string;

  constructor({ path = '', extension = '' }) {
    this.#path = path;
    this.#extension = extension;
  }

  get path(): string {
    return this.#path;
  }

  get extension(): string {
    return this.#extension;
  }

  get url(): string {
    return `${this.path}.${this.extension}`;
  }

  serialize(): object {
    return {
      path: this.#path,
      extension: this.#extension
    }
  }
}
